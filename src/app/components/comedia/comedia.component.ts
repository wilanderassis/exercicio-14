import { FilmesService } from './../../services/filmes.service';
import { Filmes } from './../../shared/filmes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.css']
})
export class ComediaComponent implements OnInit {

  filmes: Filmes[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    //RETORNA UMA LISTA DE FILMES FILTRADO POR GÊNERO
    this.filmesService.getFilmesCategoria('Comédia')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
