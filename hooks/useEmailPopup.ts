import { create } from "zustand";

interface EmailPopup {
  isEmailPopupOpen: boolean;
  setEmailPopupOpen: () => void;
  setEmailPopupClose: () => void;
}

export const useEmailPopup = create<EmailPopup>((set) => ({
  isEmailPopupOpen: false,
  setEmailPopupOpen: () => set({ isEmailPopupOpen: true }),
  setEmailPopupClose: () => set({ isEmailPopupOpen: false }),
}));
