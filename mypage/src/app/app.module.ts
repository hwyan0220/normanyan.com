import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule, MatCardModule} from '@angular/material';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { JourneyComponent } from './journey/journey.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GreetingComponent,
    AboutMeComponent,
    JourneyComponent,
    ProjectsComponent,
    ContactsComponent,
    ThoughtsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
