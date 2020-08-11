import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  experiences = [
    {
      img: '../../assets/images/logo-wbc-200.png',
      team: 'Westpac, Analytics & Insights',
      position: 'Data Scientist',
      period: 'since June 2018',
      location: 'Sydney, NSW',
      duties: 'Led the development of Customer First Tool in Business Bank which serves as\
      an one-stop-shop system supporting 1200 bankers across all Westpac brands.\
      Solely built the data foundation, established data pipeline/ETL to make sure\
      data flows smoothly, reliably and timely. Built client/server capabilities using\
      latest Angular/.Net Core technologies. Deployed a chatbot using IBM Watson to\
      facilitate customer support. We moved super fast with limited resources\
      (completed this great work within 4 mths, from wireframe to deployment)'
    },
    {
      img: '../../assets/images/logo-wbc-200.png',
      team: 'Westpac, St.George Industry Innovation Hub',
      position: 'Senior Analyst, Data Scientist',
      period: 'JUNE 2016 - MAY 2018',
      location: 'Sydney, NSW',
      duties: 'Solely built the data and analytics foundation of the team. Used network analysis to \
      identify high quality linkedin leads for bankers. Used clustering and classification \
      models to categorise customer transactions and identified over $100m split banking \
      opportunities. Authored several Tableau reports and created shared datasets for my team \
      to use in their own analysis.'
    },
    {
      img: '../../assets/images/logo-wbc-200.png',
      team: 'Westpac, Human Capital Analytics',
      position: 'Data Analyst',
      period: 'JULY 2014 - MAY 2016',
      location: 'Sydney, NSW',
      duties: 'Created and implemented a classification model to predict likelihood that an arbitrary employee\
      would raise a stress incident. Led one system transformation project and several reporting automation \
      projects.'
    },
    {
      img: '../../assets/images/citi.svg.png',
      team: 'Citigroup, Investment Banking Department',
      position: 'Senior Associate',
      period: 'JANUARY 2011 - JUNE 2013',
      location: 'Shanghai, China',
      duties: 'Executed 10 IPO, M&A, Debt and Private Equity deals for combined $350m'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
