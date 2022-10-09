import { Component } from '@angular/core';
import { Ksiazka } from 'src/ksiazka';
import { KSIAZKI } from 'src/ksiazki';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteka';
  ksiazeczki:Ksiazka[]=KSIAZKI;
  wybranaKsiazka!:Ksiazka;
  wyswietl(jakasKsiazka:Ksiazka):void{
    this.wybranaKsiazka=jakasKsiazka;
  }

}
