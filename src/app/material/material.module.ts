import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRadioModule } from "@angular/material/radio";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSidenavModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
