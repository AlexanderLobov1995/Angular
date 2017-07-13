import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubComponent } from './sub-component/sub-component.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, SubComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

