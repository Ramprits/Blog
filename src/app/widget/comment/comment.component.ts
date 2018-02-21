import { Component, OnInit } from "@angular/core";
import { CommentService } from "./comment.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styles: []
})
export class CommentComponent implements OnInit {
  comments: any[];
  loading: boolean;
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.commentService
        .GetAllComments()
        .subscribe(data => (this.comments = data));
    }, 2000);
    this.loading = false;
  }
}
