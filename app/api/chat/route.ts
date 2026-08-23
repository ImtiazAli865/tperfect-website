import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { categories } from "@/lib/categories";

const MODEL = "claude-sonnet-4-6";
const MAX_TOKENS = 1024;

const SYSTEM_PROMPT = `You are the friendly customer support assistant for T.perfect, an online home-textile store based in Pakistan (t.perfect).

ABOUT THE STORE
T.perfect sells home essentials across these categories: ${categories.map((c) => c.name).join(", ")}.
Products include items like bed pillows, neck pillows, ball fiber filling, bath towels, wash cloths, kitchen aprons, baby wedge pillows, bean bags, hair drying caps, and bath slippers.

ORDERING & DELIVERY
- There is NO online payment gateway. All orders are Cash on Delivery (COD) only.
- Orders are confirmed via email after checkout.
- Delivery is available across Pakistan and typically takes 2-4 business days.
- To browse and buy, direct customers to the Shop page (/shop) or Categories page (/categories).

WHAT YOU CAN HELP WITH
- Answering product questions (materials, sizes, use cases, care instructions) in general terms.
- Recommending which category or type of product fits what the customer describes.
- Explaining the Cash on Delivery process and delivery timelines.
- General store questions (returns, how to order, etc.) using the policy above.

IMPORTANT — WHAT YOU MUST NOT DO
- You do not have access to real-time inventory, exact prices, or order records. Do not invent exact prices, stock levels, or SKU details — point customers to the Shop/Categories pages for current pricing and availability instead.
- If a customer asks about the status of a SPECIFIC existing order (e.g. "where is my order", "has my order shipped"), do NOT invent or guess an order status. Politely explain that live order tracking isn't available yet and that a team member will follow up by email or WhatsApp with the details.
- Do not make promises about exact delivery dates, discounts, or policies beyond what's stated above.

TONE
Be warm, concise, and helpful — like a knowledgeable store assistant. Keep answers short (a few sentences) unless the customer asks for detail.

FORMATTING
Reply in plain conversational text only. Do not use markdown — no asterisks for bold/italics, no headers, no markdown links or bullet syntax. If you list a few options, use short lines or commas instead of a markdown list. When pointing to a page, just say its name plainly (e.g. "check out the Shop page") rather than a markdown link.`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isValidMessages(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (m) =>
        m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !isValidMessages(body.messages)) {
    return NextResponse.json(
      { error: "Request must include a non-empty messages array." },
      { status: 400 }
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set; cannot start chat.");
    return NextResponse.json(
      { error: "Chat assistant is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  let anthropicStream;
  try {
    anthropicStream = client.messages.stream({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      messages: body.messages,
    });
  } catch (err) {
    console.error("Failed to start chat stream:", err);
    return NextResponse.json(
      { error: "Couldn't reach the assistant. Please try again." },
      { status: 502 }
    );
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of anthropicStream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        console.error("Chat stream error:", err);
        controller.enqueue(
          encoder.encode(
            "\n\nSorry, something went wrong on our end. Please try again in a moment."
          )
        );
        controller.close();
      }
    },
    cancel() {
      anthropicStream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
