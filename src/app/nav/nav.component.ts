import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  show : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.show = !this.show;
  }

  donotShow(){
    this.show = false;
  }

}
