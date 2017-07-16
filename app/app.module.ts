import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OtherModule } from './other-component/other-component.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { RootComponent } from './root.component';

@NgModule({
  imports: [
    BrowserModule,
    OtherModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, RootComponent],
  bootstrap: [RootComponent]
})
export class AppModule {
}
