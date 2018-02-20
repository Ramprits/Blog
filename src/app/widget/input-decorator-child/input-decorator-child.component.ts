import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "app-input-decorator-child",
  templateUrl: "./input-decorator-child.component.html",
  styleUrls: ["./input-decorator-child.component.css"]
})
export class InputDecoratorChildComponent implements OnInit, AfterViewInit {
  @Input() name: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {}, 2000);
  }
}
