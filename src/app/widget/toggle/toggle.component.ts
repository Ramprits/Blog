import {
  Component,
  OnInit,
  ContentChild,
  ElementRef,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"]
})
export class ToggleComponent implements OnInit, AfterViewInit {
  @Output() help: EventEmitter<void> = new EventEmitter<void>();
  @Input() queryTemplate: TemplateRef<any>;
  @ContentChild("content") content: TemplateRef<any>;
  @ContentChild("content1") view: TemplateRef<any>;
  @ViewChild("t1") t1: TemplateRef<any>;
  @ViewChild("t2") t2: TemplateRef<any>;
  @ViewChild("t3") t3: TemplateRef<any>;
  showViewTemplate = true;
  liveTemplate: TemplateRef<any>;
  contentOutlet: TemplateRef<any>;
  template1: TemplateRef<any>;
  constructor() {}
  ClickMe(event) {
    this.help.emit();
  }
  ngOnInit() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.template1 = this.t1;
      this.liveTemplate = this.view;
      this.contentOutlet = this.content;
    }, 2000);
  }
}
