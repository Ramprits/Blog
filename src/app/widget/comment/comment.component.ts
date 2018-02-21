import {
  Component,
  OnInit,
  AfterViewInit,
  ContentChild,
  TemplateRef
} from "@angular/core";
import { CommentService } from "./comment.service";
import * as _ from "lodash";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styles: []
})
export class CommentComponent implements OnInit, AfterViewInit {
  @ContentChild("CommentTemplate") CommentTemplate: TemplateRef<any>;
  LiveTemplate: TemplateRef<any>;
  comments: any[];
  loading: boolean;
  constructor(private commentService: CommentService) {}
  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.commentService.GetAllComments().subscribe(comment => {
        this.comments = comment;
        this.loading = false;
      });
    }, 0);
    setTimeout(() => {
      this.LiveTemplate = this.CommentTemplate;
    }, 2000);
  }

  ngAfterViewInit() {}
}
