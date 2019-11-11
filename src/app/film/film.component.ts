import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
@Input()titre:string;
@Input()duree:number;
@Input()affiche:string;
prix:number=0;
//iselected($event)
//{
  //if (.value=="retraite")
//  this.prix=2.5;
 // else if (.value=="autre")
 // this.prix=6;
 // else
  //this.prix=3;


//}
  constructor() { }

  ngOnInit() {
  }

}
