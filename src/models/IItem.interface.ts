export type IItem = Partial<{
  id: string | number;
  description: string;
  name: string;
  typeKey: string;
  brand: string;
  brandKey: string;
  nominal: string;
  price: number;
}>;
