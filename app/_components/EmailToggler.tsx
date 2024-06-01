"use client";
import { useEmailPopup } from "@/hooks/useEmailPopup";
import { Gift } from "lucide-react";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
const EmailToggler = () => {
  const [isEmailRegistered, setIsEmailRegistered] = useLocalStorage(
    "isEmailRegistered",
    false,
  );
  const isEmailPopupOpen = useEmailPopup((state) => state.isEmailPopupOpen);
  const setEmailPopupOpen = useEmailPopup((state) => state.setEmailPopupOpen);

  // Show the toggler if the email is not registered or the popup is open
  const shouldShowToggler = !isEmailRegistered || isEmailPopupOpen;

  // Reset the email registration state when the toggler is clicked
  const handleTogglerClick = () => {
    if (isEmailRegistered) {
      setIsEmailRegistered(false);
    } else {
      setEmailPopupOpen();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (!isEmailRegistered) {
        setEmailPopupOpen();
      }
    }, 10000);
  }, [isEmailRegistered, setEmailPopupOpen]);

  return shouldShowToggler ? (
    <div
      className="fixed bottom-6 right-2 z-[60] flex size-12 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-black p-3 text-white lg:bottom-8  lg:right-10"
      onClick={handleTogglerClick}
    >
      <Gift className="hover:animate-shake size-7" />
      <div className="absolute -right-1 -top-1">
        <span className="size-4 rounded-full bg-red-500 px-1 text-xs font-semibold text-white">
          1
        </span>
      </div>
    </div>
  ) : null;
};

export default EmailToggler;
