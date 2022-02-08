export class Product {
  title: string;
  description: string;
  images?: string[];
  price?: number;
  options?: Array<{ [k: string]: string }>;
  categories?: string[];
  tags?: string[];
}
