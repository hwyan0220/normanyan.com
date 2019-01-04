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
'About me', 'My journey so far', 'My projects', 'Thoughts and ideas', 'Getting connected'
] ;

navScroll(target) {
  this.drawer.close();
  document.getElementById(target).scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
}
