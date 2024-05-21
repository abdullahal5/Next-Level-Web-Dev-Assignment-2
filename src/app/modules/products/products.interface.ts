export type TVariants = {
  type: string;
  value: string;
};

export type TInvetory = {
  quantity: number;
  inStock: boolean;
};

export type TProducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInvetory;
};
