import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  foods = [
    { name: 'Island Grill', rating: 4 },
    { name: 'Green Curry', rating: 3 },
    { name: 'Sweet Escape', rating: 4.5 },
    { name: 'Salty Squid', rating: 3.5 }
  ];
  constructor() {}

  ngOnInit() {}
}
