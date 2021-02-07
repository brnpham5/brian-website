import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  //BG
  twilightBG: string = "../../assets/sky-background/Colorful_sky_in_twilight_time_background_with_clouds_and_sun_with_rays.jpg";
  daylightBG: string = "../../assets/sky-background/Colorful_green_sky_background_with_clouds_and_sun_with_rays.jpg";
  midnightBG_01: string = "../../assets/sky-background/Colorful_of_the_night_sky_background_with_clouds_and_moonlight_1.jpg";
  midnightBG_02: string = "../../assets/sky-background/Colorful_of_the_night_sky_background_with_clouds_and_moonlight_2.jpg";
  midnightBG_03: string = "../../assets/sky-background/Colorful_of_the_night_sky_background_with_clouds_and_moonlight_3.jpg";
  
  currentBG: string = "";

  //Scroll Section
  scrollY: number = 0;
  @ViewChild('welcome') welcomeCloud!: ElementRef;
  @ViewChild('description') descriptionCloud!: ElementRef;
  @ViewChild('codePrefs') codePrefsCloud!: ElementRef;

  welcomeInView: boolean = false;
  descriptionInView: boolean = false;
  codePrefsInView: boolean = false;

  constructor() { }
  ngOnInit(){
    var date: Date = new Date();
    //05 - 08 = twilight
    //08 - 16 - daylight
    //16 - 19 - twilight
    //19 - 21 - midnight_03
    //21 - 24 - midnight_02
    //24 - 05 - midnight_01
    var hour: number = date.getHours();
    if(hour >= 0 && hour < 5){
      this.currentBG = this.midnightBG_01;
    } else if(hour >= 5 && hour < 8){
      this.currentBG = this.twilightBG;
    } else if(hour >= 8 && hour < 16){
      this.currentBG = this.daylightBG;
    } else if(hour >= 16 && hour < 19){
      this.currentBG = this.twilightBG;
    } else if(hour >= 19 && hour < 21){
      this.currentBG = this.midnightBG_03;
    } else if(hour >= 21 && hour <= 24){
      this.currentBG = this.midnightBG_02;
    } else {
      this.currentBG = this.daylightBG;
    }
  }

  @HostListener('window:scroll', ['$event']) 
    onScrollEvent(event: any){
      console.log(window.pageYOffset);
      this.scrollY = window.pageYOffset;
    }
    
    ngAfterViewInit(){
      console.log(this.welcomeCloud.nativeElement.getBoundingClientRect());
      console.log(this.descriptionCloud.nativeElement.getBoundingClientRect());
      console.log(this.codePrefsCloud.nativeElement.getBoundingClientRect());
    }

    isScrolledIntoView(element: ElementRef){
      const rect = element.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      return topShown && bottomShown;
    }
}


