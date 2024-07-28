import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
};
