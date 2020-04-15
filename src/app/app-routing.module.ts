import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { ProductComponent } from "./product/product.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "product", component: ProductComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "shoppingcart", component: ShoppingcartComponent},
  { path: "aboutus", component: AboutusComponent},
  { path: "contactus", component: ContactusComponent},
  { path: "shoppingcart", component: ShoppingcartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
