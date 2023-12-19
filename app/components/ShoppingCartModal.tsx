"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  return (
    <div>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
          </SheetHeader>

          <div className="h-full fex fex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="py-6">Cart Empty</h1>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className="flex py-6">
                        <div className="h-24 w-24 flex flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
                          <Image
                            src={entry.image as string}
                            alt="product img"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-500">
                              <h3>{entry.name}</h3>
                              <p className="ml-4">${entry.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {entry.description}
                            </p>
                          </div>
                          <div className="flex flex-1 justify-between text-sm mt-3">
                            <p className="text-gray-500">
                              QTY: {entry.quantity}
                            </p>
                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-primary hover:text-primary/90"
                                onClick={() => removeItem(entry.id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
            <div className="border-t border-gray-500 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
            </div>
            <p className="text-gray-500 mt-0.5 text-sm">
              Shipping and taxes are calculated at chechout
            </p>

            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>
            <div className="flex mt-6 justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ShoppingCartModal;