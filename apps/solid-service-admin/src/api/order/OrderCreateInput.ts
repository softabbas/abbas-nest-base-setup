import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
