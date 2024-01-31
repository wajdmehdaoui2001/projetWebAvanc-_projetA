import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy{
  navbg:any;
  token:any;
  constructor(private authService:AuthService, private router:Router){}
  
  
  
  ngOnInit(): void {
    this.token=this.authService.token;
  }
  ngOnDestroy(): void {
    this.logOut();
    }
    navigateReclamations(){
      this.router.navigate(['/reclamations'])
      
    }
  
  
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'black'
      }
    }else
    {
        this.navbg = {}
    }
  }
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  showNav():boolean{
    if(this.token===''||this.token===undefined){
    return false;
  }
    else{return true;}
    
  }
  logOut(){
    this.authService.logOut();
    this.token = undefined;
  this.router.navigate(['/auth']);
    console.log("token:",this.token);
  }
  
}
