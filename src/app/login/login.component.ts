import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactusForm: any;

  ngOnInit() {
    this.contactusForm = this.fb.group({
      emailAddress: "",
      // number: "",
    });
  }
}
export class FormFieldPrefixSuffixExample {
  hide = true;
}
