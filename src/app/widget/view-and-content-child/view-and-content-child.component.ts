import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ContentChild,
  TemplateRef
} from "@angular/core";
import * as _ from "lodash";
@Component({
  selector: "app-view-and-content-child",
  templateUrl: "./view-and-content-child.component.html",
  styles: []
})
export class ViewAndContentChildComponent implements OnInit, AfterViewInit {
  @ViewChild("ViewChild") ViewChild: TemplateRef<any>;

  @ContentChild("content") content: TemplateRef<any>;
  text = "View";
  LiveTemplate: TemplateRef<any>;
  showViewTemplate = true;
  constructor() {}

  ngOnInit() {
    console.log("lodash version:", _.VERSION);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.LiveTemplate = this.content;
    }, 5000);
  }

  ToggleButton() {
    this.showViewTemplate = !this.showViewTemplate;
    this.LiveTemplate = this.showViewTemplate ? this.ViewChild : this.content;
  }
}
