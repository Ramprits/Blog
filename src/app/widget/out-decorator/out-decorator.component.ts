import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-out-decorator",
  templateUrl: "./out-decorator.component.html",
  styleUrls: ["./out-decorator.component.css"]
})
export class OutDecoratorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Handle() {
    alert("Hello");
  }
}
