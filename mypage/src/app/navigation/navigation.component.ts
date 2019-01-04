import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

@ViewChild('drawer') public drawer: MatDrawer;

  constructor() {}

navButtons = [
  {
    desc: 'About me',
    loc: 'about'
  },
  {
    desc: 'My journey so far',
    loc: 'journey'
  },
  {
    desc: 'Projects I\'ve worked on',
    loc: 'projects'
  },
  {
    desc: 'Thoughts and ideas',
    loc: 'thoughts'
  },
  {
    desc: 'Getting connected',
    loc: 'contacts'
  }
] ;

navScroll(target) {
  this.drawer.close();
  document.getElementById(target).scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
}
