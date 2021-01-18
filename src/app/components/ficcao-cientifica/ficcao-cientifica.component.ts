import { FilmesService } from './../../services/filmes.service';
import { Filmes } from './../../shared/filmes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficcao-cientifica',
  templateUrl: './ficcao-cientifica.component.html',
  styleUrls: ['./ficcao-cientifica.component.css']
})
export class FiccaoCientificaComponent implements OnInit {

  filmes: Filmes[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    //RETORNA UMA LISTA DE FILMES FILTRADO POR GÊNERO
    this.filmesService.getFilmesCategoria('Ficção científica')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
