import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {
  testimonies: Array<{}> = [
    {
      content:
        'Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.',
      name: 'Enrique'
    },
    {
      content:
        'Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining.',
      name: 'Thomas'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
