import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public status = false;
  breakpoint: number;

  projects =
  [
    {
      name: 'Childcare Sector Opportunity Analysis',
      url: '',
      img: 'https://cdn.newsapi.com.au/image/v1/9b40c7068b9f6a4e999fc4a77c014156',
      desc: 'This is an interactive dashboard built to help childcare owner to find the next best place\
            for expansion anywhere in Australia',
      type: 'Industry Research'
    },
    {
      name: 'Employee Stress Classification',
      url: '',
      img: 'https://cdn.newsapi.com.au/image/v1/a27625a67fb1c66c2fa51912b9f255bf',
      desc: 'Used random forest to find employees who are most prone to mental stress\
      This model improved worker compensation outcome with early intervention (reduce povision by $1m)\
      ',
      type: 'Machine Learning'
    },
    {
      name: 'Little Helper Chatbot Project',
      url: '',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTx_Nh7uMJl7oxs6ZggY0NddHXXyLAGtNwB__ihEBMHoUHdV1',
      desc: 'A little chabot I created using Google\'s dialogueflow service and angular. \
      This bot serves as a personal assistant to help with people\'s request while I am not around',
      type: 'Web Dev/Machine Learning'
    },
    {
      name: 'Social Network Lead Generator',
      url: '',
      img: 'https://extensionaus.com.au/extension-practice/wp-content/uploads/sites/4/2017/05/Page-Banner.jpg',
      desc: 'A python powered digital solution which mines social networks data and supply user useful \
      "warm leads" information based on user\'s criteria',
      type: 'Digital Solution/Business Development'
    },
    {
      name: 'Product Propensity Analysis',
      url: '',
      img: 'https://landerapp.com/blog/wp-content/uploads/2018/05/MAG-FR-Oestreicher-Singer-Product-Recommendation-Viral-Marketing-Social-Media-Network-Ecommerce-1200-1200x627.jpg',
      desc: 'A model identifies customers who are most likely to purchase a product based on \
      behaviroral and demographic factors',
      type: 'Machine Learning'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth > 400) ? 3 : 1;

  }

  clickEvent(e) {
    if (e.path[3].childNodes &&
      e.path[3].childNodes[1] &&
      e.path[3].childNodes[1].childNodes &&
      e.path[3].childNodes[1].childNodes[0]) {
    const card = e.path[3].childNodes[1].childNodes[0];
    card.classList.toggle('is-flipped');
    // console.log(e);
      }
    }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth > 400) ? 3 : 1;
  }

}
