import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  createdAt: Date;
  id: string;
  orderItems?: Array<OrderItem>;
  updatedAt: Date;
};
