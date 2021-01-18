import { ActivatedRoute, Params } from '@angular/router';
import { FilmesService } from './../../services/filmes.service';
import { Filmes } from './../../shared/filmes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit {

  filme: Filmes

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //RETORNA UM FILME PELO ID
    this.route.params.subscribe((params: Params) => {
      this.filmesService.getFilmePorId(params.id)
        .subscribe((filme) => {
          this.filme = filme
          console.log(this.filme);

        })
    })
  }

}
