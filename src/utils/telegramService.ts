const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

export const sendTelegramMessage = async (name: string, phone: string): Promise<void> => {
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error("Brakuje tokena bota lub identyfikatora czatu.");
  }

  const message = `📩 Nowa rejestracja\n\n👤 Imię: ${name}\n📞 Telefon: ${phone}`;

  const response = await fetch(TELEGRAM_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
  });

  if (!response.ok) {
    throw new Error("Błąd podczas wysyłania danych.");
  }
};
