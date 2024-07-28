import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
