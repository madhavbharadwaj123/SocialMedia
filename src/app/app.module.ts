import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { PostspageComponent } from './postspage/postspage.component';
import { PostComponent } from './post/post.component';
import { NavComponent } from './nav/nav.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterCompComponent,
    LoginCompComponent,
    PostspageComponent,
    PostComponent,
    NavComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
