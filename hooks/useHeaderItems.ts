import { create } from "zustand";

interface HeaderItem {
  isCartOpen: boolean;
  setCartOpen: () => void;
  setCartClose: () => void;
  isSearchOpen: boolean;
  setSearchOpen: () => void;
  setSearchClose: () => void;
  isSidebarOpen: boolean;
  setSidebarOpen: () => void;
  setSidebarClose: () => void;
  isCollectionOpen: boolean;
  setCollectionOpen: () => void;
  setCollectionClose: () => void;
  isShopOpen: boolean;
  setShopOpen: () => void;
  setShopClose: () => void;
}

export const useHeaderItems = create<HeaderItem>((set) => ({
  isCartOpen: false,
  setCartOpen: () => set({ isCartOpen: true }),
  setCartClose: () => set({ isCartOpen: false }),
  isSearchOpen: false,
  setSearchOpen: () => set({ isSearchOpen: true }),
  setSearchClose: () => set({ isSearchOpen: false }),
  isSidebarOpen: false,
  setSidebarOpen: () => set({ isSidebarOpen: true }),
  setSidebarClose: () => set({ isSidebarOpen: false }),
  isCollectionOpen: false,
  setCollectionOpen: () => set({ isCollectionOpen: true }),
  setCollectionClose: () => set({ isCollectionOpen: false }),
  isShopOpen: false,
  setShopOpen: () => set({ isShopOpen: true }),
  setShopClose: () => set({ isShopOpen: false }),
}));
