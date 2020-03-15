import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-example',
  templateUrl: './custom-pipe-example.component.html',
  styleUrls: ['./custom-pipe-example.component.css']
})
export class CustomPipeExampleComponent implements OnInit {

  newDate: any;
  constructor() { }

  ngOnInit() {
    this.newDate = new Date();
  }

}