import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
  user?: UserWhereUniqueInput;
};
