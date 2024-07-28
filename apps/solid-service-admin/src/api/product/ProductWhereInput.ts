import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
};
