import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

carouselData:any=[];


  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.carouselData=this.homeService.carouselData;
    
  }
  
  

  
}
