import AddToCart from "@/app/components/AddToCart";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/app/components/ui/button";
import { productDetail } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { Key, Star, TruckIcon } from "lucide-react";
import React from "react";

async function getData(slug: string) {
  const query = `*[_type == 'products' && slug.current == '${slug}' ][0]{
    _id,
      price,
      _createdAt,
      description,
      name,
      "slug": slug.current,
      'categoryName': category->name,
      images,
      price_id
  }`;

  const data = await client.fetch(query);

  return data;
}

async function productPage({ params }: { params: { slug: string } }) {
  const data: productDetail = await getData(params.slug);
  return (
    <div className="mx-auto w-full container max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery images={data.images} />
        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {data.categoryName}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-800 lg:text-3xl">
              {data.name}
            </h2>
          </div>
          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm">4.2</span> <Star className="h-4 w-5" />
            </Button>
            <span className="text-sm text-gray-600 transition duration-100">
              56 ratings
            </span>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                ${data.price}
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                ${data.price + 30}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              319 purchased in the last 7 days
            </span>
          </div>
          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <TruckIcon />
            <span className="text-sm">
              Faster Shipping options may be available
            </span>
          </div>

          <div className="flex gap-2.5">
            <AddToCart
              currency="USD"
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              key={data._id}
              price_id={data.price_id}
            />
            <Button variant={"secondary"}>Checkout</Button>
          </div>

          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default productPage;
