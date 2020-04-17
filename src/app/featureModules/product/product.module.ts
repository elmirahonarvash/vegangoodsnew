import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingcartComponent } from "src/app/shoppingcart/shoppingcart.component";
import { ProductComponent } from "src/app/product/product.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  declarations: [ShoppingcartComponent, ProductComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "shoppingcart", component: ShoppingcartComponent },
      { path: "product", component: ProductComponent },
    ]),
    MaterialModule,
  ],
})
export class ProductModule {}
