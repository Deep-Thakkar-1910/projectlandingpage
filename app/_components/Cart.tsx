"use client";

import { useHeaderItems } from "@/hooks/useHeaderItems";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const Cart = () => {
  const isCartOpen = useHeaderItems((state) => state.isCartOpen);
  const setCartClose = useHeaderItems((state) => state.setCartClose);
  return (
    <aside
      className={cn(
        "lg:1/3 fixed right-0 top-0 z-50 flex h-full w-10/12 translate-x-full flex-col border-2 border-t-0 border-black bg-gradient-to-br from-purple-700 to-[#715097] transition-transform duration-300 ease-in-out sm:w-2/3 md:w-2/5",
        isCartOpen && "translate-x-0",
      )}
    >
      <div className="flex h-16 w-full items-center justify-between border-b-2 border-b-black px-4">
        <p className="font-medium">Your Cart Items - 0</p>
        <X className="size-8 cursor-pointer" onClick={setCartClose} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 font-medium tracking-wide">
        <h2 className="mt-4 text-2xl font-bold">Your Cart</h2>
        <p className=" text-base ">Your cart is currently empty.</p>

        <div className="w-fit border-b-2 border-black pb-3">
          <p className=" text-xl ">
            Continue Shopping <span> {"  "}&rarr;</span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
