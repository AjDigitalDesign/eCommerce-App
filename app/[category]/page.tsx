import { productDetail } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData(category: string) {
  const query = `*[_type == 'products' && category->name == '${category}' ] {
        _id,
          name,
          'imagesUrl': images[0].asset->url,
          price,
          'slug': slug.current,
          'categoryName': category->name
      }`;

  const data = await client.fetch(query);
  return data;
}
// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

async function categoryPage({ params }: { params: { category: string } }) {
  const data: productDetail[] = await getData(params.category);

  return (
    <div className="bg-white mx-auto w-full container">
      <div className="max-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-900 font-bold tracking-tight text-2xl">
            Our Latest Products for {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-col-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imagesUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  priority
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default categoryPage;
