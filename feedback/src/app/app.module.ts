import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import  {createCustomElement} from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackWidgetComponent } from './feedback-widget/feedback-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[FeedbackWidgetComponent]
})
export class AppModule {

  constructor(private injector : Injector){
    const el = createCustomElement(FeedbackWidgetComponent, {injector : this.injector});
    customElements.define('app-feedback',el);
  }

 }
