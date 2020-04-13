import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  signupForm: any;

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: "",
      emailAddress: "",
      number: "",
      birthDate: "",
      address: "",
    });
  }
}
