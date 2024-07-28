import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
