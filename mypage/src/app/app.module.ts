import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule, MatCardModule} from '@angular/material';
import { GreetingComponent } from './components/greeting/greeting.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { MessageListComponent } from './components/chatbot/message-list/message-list.component';
import { MessageFormComponent } from './components/chatbot/message-form/message-form.component';
import { MessageItemComponent } from './components/chatbot/message-list/message-item/message-item.component';
import { DialogflowService } from './services/dialogflow.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GreetingComponent,
    AboutMeComponent,
    JourneyComponent,
    ProjectsComponent,
    ContactsComponent,
    ThoughtsComponent,
    ChatbotComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
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
    MatCardModule,
    FormsModule,
    HttpModule,
    CommonModule,
    DragDropModule
  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
