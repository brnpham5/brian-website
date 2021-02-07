import { Component } from '@angular/core';

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

}