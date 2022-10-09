import { Component, OnInit, Input } from '@angular/core';
import { Ksiazka } from 'src/ksiazka';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {
  @Input() ksiazkaSzczegoly!:Ksiazka;
  constructor() { }

  ngOnInit(): void {
  }
  wyporzycz():void{
    this.ksiazkaSzczegoly.wypozyczen++;
  }
}
