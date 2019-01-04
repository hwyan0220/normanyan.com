import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss']
})
export class ThoughtsComponent implements OnInit {

  blogs =
  [
    {
      title: 'End-to-end Machine Learning Project Template — Regression',
      url: '',
      img: 'http://www.healthcatalyst.com/wp-content/uploads/2017/10/machine-learning-in-healthcare.jpg',
      desc: '',
    },
    {
      title: 'Exploring Relationship between “Quality of Life” Factors and Sydney Property Prices',
      url: '',
      img: 'https://cdn.theatlantic.com/assets/media/img/mt/2018/06/GettyImages_81100278/lead_720_405.jpg?mod=1533691460',
      desc: '',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
