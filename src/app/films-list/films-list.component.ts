import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
films =[{titre:'Anges & Démons',affiche:'../assets/ange.jpg',duree:120},
{titre:'Coco',affiche:'../assets/coco.jpg',duree:88},
{titre:'Coeur Nomade',affiche:'../assets/nomade.jpg'}];
datejour:Date= new Date(); 
prix:number=3;
  constructor() { }

  ngOnInit() {
  }

}
