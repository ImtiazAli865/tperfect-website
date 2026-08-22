import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923183707145";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}
