import { FilmesService } from './../../services/filmes.service';
import { Filmes } from './../../shared/filmes.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  filmes: Filmes[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    //RETORNA UMA LISTA DE FILMES FILTRADO POR GÊNERO
    this.filmesService.getFilmesCategoria('Ação')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }


}
