import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects =
  [
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: ''
    },
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: ''
    },
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: ''
    },
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: ''
    },
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: ''
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
