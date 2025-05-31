import { sendTelegramMessage } from "./telegramService";

interface RegisterFormData {
  name: string;
  phone: string;
}

export const validateAndSendForm = async (data: RegisterFormData): Promise<void> => {
  const { name, phone } = data;

  if (!name.trim() || !phone.trim()) {
    throw new Error("Wszystkie pola są wymagane.");
  }

  // простий регекс для перевірки номера телефону
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  if (!phoneRegex.test(phone)) {
    throw new Error("Nieprawidłowy numer telefonu.");
  }

  await sendTelegramMessage(name, phone);
};
