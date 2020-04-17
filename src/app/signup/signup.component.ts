import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  gender: any = [
    { value: "female-0", viewValue: "Female" },
    { value: "male-1", viewValue: "male" },
    { value: "others-2", viewValue: "Others" },
  ];

  constructor(private fb: FormBuilder) {}
  signupForm: any;

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(6)]],
      gender: "",
      emailAddress: ["", [Validators.required, Validators.email]],
      number: "",
      birthDate: "",
      address: ["", [Validators.required, Validators.maxLength(100)]],
    });
  }
}
