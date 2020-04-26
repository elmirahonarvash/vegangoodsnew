import { ContactusComponent } from "./contactus/contactus.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ShoppingcartComponent } from "./shoppingcart/shoppingcart.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProductComponent } from "./product/product.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FoodComponent } from './food/food.component';
import { SupplementComponent } from './supplement/supplement.component';
import { LotionComponent } from './lotion/lotion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "food", component: FoodComponent },
  { path: "supplement", component: SupplementComponent },
  { path: "lotion", component: LotionComponent },
  { path: "beauty", component: BeautyComponent },
  { path: "new", component: NewComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full"},
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
