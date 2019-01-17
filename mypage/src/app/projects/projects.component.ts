import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public status = false;

  projects =
  [
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://cdn.newsapi.com.au/image/v1/9b40c7068b9f6a4e999fc4a77c014156',
      desc: 'In this project, we take data from Australian Census',
      type: 'Industry Research'
    },
    {
      name: 'Employee Stress Classification',
      url: '',
      img: 'https://cdn.newsapi.com.au/image/v1/a27625a67fb1c66c2fa51912b9f255bf',
      desc: '',
      type: 'Machine Learning'
    },
    {
      name: 'Little Helper Chatbot Project',
      url: '',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTx_Nh7uMJl7oxs6ZggY0NddHXXyLAGtNwB__ihEBMHoUHdV1',
      desc: '',
      type: 'Web Dev/Machine Learning'
    },
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: '',
      type: 'Industry Research'
    },
    {
      name: 'Sector Demand Analysis',
      url: '',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: '',
      type: 'Industry Research'
    },
  ];
  constructor() { }

  ngOnInit() {

  }

  clickEvent(e) {
    console.log(e);
    const card = e.path[3].childNodes[1].childNodes[0];
    card.classList.toggle('is-flipped');
  }


}
