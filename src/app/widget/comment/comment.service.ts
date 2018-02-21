import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  GetAllComments(): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/comments`
    );
  }
}
