import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZumbaComponent } from './group-class/zumba/zumba.component';
import { PilatesComponent } from './group-class/pilates/pilates.component';
import { YogaComponent } from './group-class/yoga/yoga.component';
import { CycleComponent } from './group-class/cycle/cycle.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PersonalTrainingComponent } from './personal-training/personal-training.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {BsDropdownModule, CarouselModule, CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ZumbaComponent,
    PilatesComponent,
    YogaComponent,
    CycleComponent,
    PersonalTrainingComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'zumba', component: ZumbaComponent},
      { path: 'pilates', component: PilatesComponent},
      { path: 'yoga', component: YogaComponent},
      { path: 'cycle', component: CycleComponent},
      { path: 'personal-training', component: PersonalTrainingComponent},
      { path: 'contact-us', component: ContactUsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
