import { FilmesService } from './../../services/filmes.service';
import { Filmes } from './../../shared/filmes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {

  filmes: Filmes[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    //RETORNA UMA LISTA DE FILMES FILTRADO POR GÊNERO
    this.filmesService.getFilmesCategoria('Terror')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
