import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./signup/signup.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ProductModule } from "./featureModules/product/product.module";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { FoodComponent } from './food/food.component';
import { SupplementComponent } from './supplement/supplement.component';
import { LotionComponent } from './lotion/lotion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    FoodComponent,
    SupplementComponent,
    LotionComponent,
    BeautyComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ProductModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
