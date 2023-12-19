"use client";
import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  price: number;
  description: string;
  currency: string;
  image: any;
  price_id: string;
}

function CheckoutNow({
  currency,
  description,
  image,
  price,
  name,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}

export default CheckoutNow;
