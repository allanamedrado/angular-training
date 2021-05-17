import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
<<<<<<< HEAD
import { Output, EventEmitter } from '@angular/core';
=======
>>>>>>> 099ba99d25e4485698e8c2eee3e34fd6e1f0b59c

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
<<<<<<< HEAD
  @Output() notify = new EventEmitter();
=======
>>>>>>> 099ba99d25e4485698e8c2eee3e34fd6e1f0b59c
  constructor() {}

  ngOnInit() {}
}
