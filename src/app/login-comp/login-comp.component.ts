import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { cannotContainSpace } from '../validators/username-validator';
import {AccountServiceService} from '../account-service.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private accountService : AccountServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,cannotContainSpace]),
      password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(16)]),
    });
  }
  handleLogin(): void{
    if(this.loginForm.valid){
      (this.accountService.login(this.loginForm.value));
    }
  }
}
