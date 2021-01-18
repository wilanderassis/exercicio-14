import { FilmesService } from './../services/filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filmes } from '../shared/filmes.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
