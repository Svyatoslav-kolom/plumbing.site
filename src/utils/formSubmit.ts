import { validateAndSendForm } from "./formValidation";
import { toaster } from "../components/ui/toaster";

interface SubmitParams {
  name: string;
  phone: string;
  setName: (value: string) => void;
  setPhone: (value: string) => void;
  setLoading: (value: boolean) => void;
}

export const submitRegisterForm = async ({
  name,
  phone,
  setName,
  setPhone,
  setLoading,
}: SubmitParams) => {
  setLoading(true);
  try {
    await validateAndSendForm({ name, phone });
    toaster.create({
      title: "Sukces",
      description: "Zgłoszenie zostało wysłane!",
      type: "success",
      duration: 4000,
      closable: true,
    });
    setName("");
    setPhone("");
  } catch (error: any) {
    toaster.create({
      title: "Błąd",
      description: error.message || "Nie udało się wysłać zgłoszenia. Spróbuj ponownie później.",
      type: "error",
      duration: 4000,
      closable: true,
    });
    console.error("Validation or sending failed:", error);
  } finally {
    setLoading(false);
  }
};
