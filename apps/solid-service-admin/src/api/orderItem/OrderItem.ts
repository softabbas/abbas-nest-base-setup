import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  product?: Product | null;
  updatedAt: Date;
};
