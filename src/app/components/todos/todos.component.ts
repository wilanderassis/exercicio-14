import { Filmes } from './../../shared/filmes.model';
import { FilmesService } from './../../services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  filmes: Filmes[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getFilmes()
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
