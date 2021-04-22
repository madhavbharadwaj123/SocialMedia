import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { cannotContainSpace } from '../validators/username-validator';
import { AccountServiceService } from '../account-service.service'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent implements OnInit {
  registerForm : FormGroup;
  user : any = {};
  alreadyRegistered : boolean = false;
  constructor(private accountService : AccountServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required,cannotContainSpace]),
      password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(16)]),
      confirmPassword: new FormControl('',[Validators.required,this.matchValues('password')])
    })
    this.registerForm.controls.password.valueChanges.subscribe( () => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    }
    )
  }

  matchValues(matchTo: string){
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value? null : {isMatching: true} ;
    }
  }

  async register(){
    if(this.registerForm.valid){
     await this.accountService.register(this.registerForm.value)
  }
}

}


