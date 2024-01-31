import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  
  msg:any;
  authForm: any;

  constructor(private authService:AuthService, private formBuilder:FormBuilder,private router: Router){}
  ngOnInit(): void {
   this.authForm=this.formBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  }) ;
  }



  onSubmitSignIn() {
    this.msg = undefined;
    const formValues = this.authForm.value;
    this.authService.checkAuth(formValues.email, formValues.password)
      .subscribe(
        (res) => {
          console.log(res);
          
          this.router.navigate(["home"]);
          this.authForm.reset();
        },
        (error) => {
          this.msg = error.error.message;
        }
      );
  }
}
