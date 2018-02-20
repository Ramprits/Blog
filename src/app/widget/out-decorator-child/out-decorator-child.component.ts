import {
  Component,
  OnInit,
  Output,
  AfterViewInit,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-out-decorator-child",
  templateUrl: "./out-decorator-child.component.html",
  styleUrls: ["./out-decorator-child.component.css"]
})
export class OutDecoratorChildComponent implements OnInit, AfterViewInit {
  @Output() OutPut: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {}

  ClickMe() {
    this.OutPut.emit();
  }
}
