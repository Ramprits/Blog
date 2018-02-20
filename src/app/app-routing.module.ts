import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QueryComponent } from "./widget/query/query.component";
import { InputDecoratorComponent } from "./widget/input-decorator/input-decorator.component";
import { OutDecoratorComponent } from "./widget/out-decorator/out-decorator.component";
import { ViewAndContentTemplateComponent } from "./widget/view-and-content-template/view-and-content-template.component";

const routes: Routes = [
  { path: "", component: ViewAndContentTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
