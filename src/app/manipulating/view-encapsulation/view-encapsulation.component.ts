import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-view-encapsulation",
  templateUrl: "./view-encapsulation.component.html",
  styles: [`.red{color:red}`],
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
