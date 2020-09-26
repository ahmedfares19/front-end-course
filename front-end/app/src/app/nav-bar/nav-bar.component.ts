import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  show = false;
  myList = ['ahmed','hossam','ramy']
  constructor() {}

  ngOnInit(): void {
    console.log('hello from c');
  }
}
