import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-view-and-content-template",
  templateUrl: "./view-and-content-template.component.html",
  styles: []
})
export class ViewAndContentTemplateComponent implements OnInit {
  constructor() {}
  array = [1, 2, 3];
  ngOnInit() {}

  
}

let users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false }
];
