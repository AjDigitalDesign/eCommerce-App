export interface productData {
  _id: string;
  price: number;
  _createdAt: string;
  name: string;
  slug: string;
  categoryName: string;
  imagesUrl: string;
}

export interface productDetail {
  imagesUrl: any;
  _id: string;
  price: number;
  _createdAt: string;
  name: string;
  slug: string;
  categoryName: string;
  images: any;
  description: string;
  price_id: string;
}
