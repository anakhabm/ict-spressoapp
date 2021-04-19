import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
  guides = [
    {
      title: 'Select Your Resturant',
      content:
        ' '
    },
    {
      title: 'Select Your Desired Meal',
      content:
        ' '
    },
    {
      title: 'Get It Delivered Fast',
      content:
        '  '
    }
  ];
  constructor() {}

  ngOnInit() {}
}
