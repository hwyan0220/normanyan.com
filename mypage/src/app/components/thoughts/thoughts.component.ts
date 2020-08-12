import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss']
})
export class ThoughtsComponent implements OnInit {
  public status = false;

  blogs =
  [
    {

      title: 'End-to-end Machine Learning Project Template — Regression',
      url: 'https://medium.com/@hwyan0220/end-to-end-machine-learning-project-template-regression-eeda8a4e874c',
      img: 'assets/images/machinelearning.jpeg',
      desc: 'This workbook is used as a walk-through template of a typical ML project. This follows the process shown in \
      chapter2 of the book — handson ml with sklearn and tf. \
      I have added into this notebook my understanding on each section and also correction to a couple original codes as \
      sklearn has changed a little bit since the book was released. A few exceptions will be raised if we only follow the \
      original codes from the github repo.',
    },
    {

      title: 'Relationship between “Quality of Life” Factors and Sydney Property Prices',
      url: 'https://medium.com/@hwyan0220/exploring-relationship-between-liveability\
      -factors-and-sydney-property-prices-part-1-3d141dd3a452',
      img: 'https://cdn.theatlantic.com/assets/media/img/mt/2018/06/GettyImages_81100278/lead_720_405.jpg?mod=1533691460',
      desc: 'Last year, I did a small piece of analysis on Sydney’s housing market using latest census data and also a few \
      other public datasets. As a result of this research, we will be able to determine the “right” median house price for any \
      postcode in Sydney based their livability factors. Although the market has changed a lot since last year, the method proposed \
      can still be useful if anyone is interested in this area.',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  clickEvent(e) {
    console.log(e);
    if (e.path[3].childNodes &&
      e.path[3].childNodes[1] &&
      e.path[3].childNodes[1].childNodes &&
      e.path[3].childNodes[1].childNodes[0]) {
    const card = e.path[3].childNodes[1].childNodes[0];
    card.classList.toggle('is-flipped');
      }
  }

}
