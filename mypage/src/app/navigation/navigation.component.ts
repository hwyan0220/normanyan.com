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



// When the user clicks on the button, scroll to the top of the document
btnScroll(id) {
  const btnPos = document.getElementById('mainBody').scrollTop+1;
  const sections = ['greeting', 'about', 'journey', 'projects', 'thoughts', 'contacts'];
  let btnIdx;


  if (btnPos < document.getElementById(sections[sections.length-1]).offsetTop) {
    for ( let i = 0; i < sections.length; i++) {
      if (btnPos < document.getElementById(sections[i]).offsetTop) {
        btnIdx = i;
        break;
      } else {
        continue;
      }
    }
  } else {
    btnIdx = sections.length;
  }

  if (id === 'upBtn') {
    this.navScroll(sections[ btnIdx - 2 ]);
  } else {
    this.navScroll(sections[btnIdx]);
  }


}

}
