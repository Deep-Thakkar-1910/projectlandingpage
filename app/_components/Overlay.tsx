"use client";

import { useHeaderItems } from "@/hooks/useHeaderItems";

const Overlay = () => {
  const isCartOpen = useHeaderItems((state) => state.isCartOpen);
  const isSidebarOpen = useHeaderItems((state) => state.isSidebarOpen);
  const setCartClose = useHeaderItems((state) => state.setCartClose);
  const setSidebarClose = useHeaderItems((state) => state.setSidebarClose);
  return isCartOpen || isSidebarOpen ? (
    <div
      className="absolute left-0 top-0 z-40 size-full bg-transparent"
      onClick={() => {
        setCartClose();
        setSidebarClose();
      }}
    ></div>
  ) : null;
};

export default Overlay;
