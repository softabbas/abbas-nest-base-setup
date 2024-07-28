import { OrderItem } from "../orderItem/OrderItem";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderItems?: Array<OrderItem>;
  updatedAt: Date;
  user?: User | null;
};
