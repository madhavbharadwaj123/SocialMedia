import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import { NavComponent } from './nav/nav.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'Posts',component: NavComponent},
  {path:'Photos',component: ProfilePageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
