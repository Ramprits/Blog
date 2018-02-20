import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-query",
  templateUrl: "./query.component.html",
  styleUrls: ["./query.component.css"]
})
export class QueryComponent implements OnInit {
  widgetTitle = "Query Decorators";
  constructor() {}

  ngOnInit() {}

  showHelp() {
    console.log("fooooo");
  }
}
