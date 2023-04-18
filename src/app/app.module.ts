import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { NavbarComponent } from './navbar/navbar.component';
import { SolveProblemComponent } from './solve-problem/solve-problem.component';
import { CreateProblemComponent } from './create-problem/create-problem.component';
import { ColorArrayPipe } from './pipe/color-array.pipe';
import { ShowCirclePipe } from './pipe/show-circle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SolveProblemComponent,
    CreateProblemComponent,
    ColorArrayPipe,
    ShowCirclePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
