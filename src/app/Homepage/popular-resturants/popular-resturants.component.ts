import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-resturants',
  templateUrl: './popular-resturants.component.html',
  styleUrls: ['./popular-resturants.component.css','../recommended/recommended.component.css']
})
export class PopularResturantsComponent implements OnInit {
  foods = [
    { name: 'Island Grill', rating: 4 },
    { name: 'Green Curry', rating: 3 },
    { name: 'Sweet Escape', rating: 4.5 },
    { name: 'Salty Squid', rating: 3.5 }
  ];
  constructor() {}

  ngOnInit() {}
}
