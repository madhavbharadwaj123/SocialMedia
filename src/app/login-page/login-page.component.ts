import { Component, OnInit } from '@angular/core';
import { AccountServiceService} from '../account-service.service';
import { LoginCompComponent } from '../login-comp/login-comp.component';
import { RegisterCompComponent } from '../register-comp/register-comp.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public accountService : AccountServiceService) {
   }

  ngOnInit(): void {
  }

  authState : boolean = true;

  handleLoginClick() : void{
    this.accountService.changeForm(true);
    //this.authState = true;
  }
  handleRegisterClick() : void{
    //this.authState = false;
    this.accountService.changeForm(false);
  }

}
