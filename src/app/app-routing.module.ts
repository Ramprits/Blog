import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QueryComponent } from "./widget/query/query.component";

const routes: Routes = [{ path: "", component: QueryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
