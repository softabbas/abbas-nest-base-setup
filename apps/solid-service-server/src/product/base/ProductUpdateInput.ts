/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
}

export { ProductUpdateInput as ProductUpdateInput };