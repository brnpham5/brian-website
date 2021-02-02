import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'brian-website';
  burgerStatus: boolean = false;

  twilightBG: string = "../assets/sky-background/Colorful_sky_in_twilight_time_background_with_clouds_and_sun_with_rays.jpg";
  daylightBG: string = "../assets/sky-background/Colorful_green_sky_background_with_clouds_and_sun_with_rays.jpg";
  midnightBG_01: string = "../assets/sky-background/Colorful_of_the_night_sky_background_with_clouds_and_moonlight_1.jpg";
  midnightBG_02: string = "../assets/sky-background/Colorful_of_the_night_sky_background_with_clouds_and_moonlight_2.jpg";
  midnightBG_03: string = "../assets/sky-background/Colorful_of_the_night_sky_background_with_clouds_and_moonlight_3.jpg";
  
  currentBG: string = "";

  constructor() {

  }

  public OnHome(){
    console.log("Home");
  }

  public OnMenu(){
    this.burgerStatus = !this.burgerStatus;
  }

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
}