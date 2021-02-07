import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component'; 

const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'games', component: GamesComponent },
  { path: '' , component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
