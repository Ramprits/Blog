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
  public users1: any[];
  @ViewChild("ViewChild") ViewChild: TemplateRef<any>;

  @ContentChild("content") content: TemplateRef<any>;
  text = "View";
  LiveTemplate: TemplateRef<any>;
  showViewTemplate = true;
  constructor() {}
  public find: string = "barney";
  ngOnInit() {
    console.log("lodash version:", _.VERSION);
    // console.log(_.findIndex(this.users, ["active", true]));
    // console.log(_.concat(this.array1, this.array2));
    // console.log(_.merge(this.object, this.other));
    _.forEachRight(this.array1, function(params) {
      console.log(params);
      if (params == 6) {
        console.log("params", params);
      }
    });
    setTimeout(() => {
      this.users = _.dropWhile(this.users, function(o) {
        return !o.active;
      });
    }, 5000);
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
  users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true }
  ];
  array1 = [1, 2, 3, 4, 5, 6];
  array2 = [1, 2, 3, 4, 5, 6];

  object = {
    a: [{ b: 2 }, { d: 4 }]
  };

  other = {
    a: [{ c: 3 }, { e: 5 }]
  };
}
