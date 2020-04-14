import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactusForm: any;

  ngOnInit() {
    this.contactusForm = this.fb.group({
      fullName: "",
      emailAddress: "",
      message:"",
    });
  }
}
