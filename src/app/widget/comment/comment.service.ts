import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/map";

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  GetAllComments(): Observable<any[]> {
    return this.http
      .get<any[]>(`https://jsonplaceholder.typicode.com/comments`)
      .pipe(data => {
        return data;
      });
  }
}
