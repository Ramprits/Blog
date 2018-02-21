import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'lodash';
import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ToggleComponent } from './widget/toggle/toggle.component';
import { QueryComponent } from './widget/query/query.component';
import { InputDecoratorComponent } from './widget/input-decorator/input-decorator.component';
import { InputDecoratorChildComponent } from './widget/input-decorator-child/input-decorator-child.component';
import { OutDecoratorChildComponent } from './widget/out-decorator-child/out-decorator-child.component';
import { OutDecoratorComponent } from './widget/out-decorator/out-decorator.component';
import { ViewAndContentTemplateComponent } from './widget/view-and-content-template/view-and-content-template.component';
import { ViewAndContentChildComponent } from './widget/view-and-content-child/view-and-content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    QueryComponent,
    InputDecoratorComponent,
    InputDecoratorChildComponent,
    OutDecoratorChildComponent,
    OutDecoratorComponent,
    ViewAndContentTemplateComponent,
    ViewAndContentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
