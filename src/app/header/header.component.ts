import { FilmesService } from './../services/filmes.service';
import { Filmes } from './../shared/filmes.model';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filmes: Filmes[] = []
  nome: string

  constructor(
    private filmesService: FilmesService
  ) { }

  //INICIALIZA O ATRIBUTO NOME EM BRANCO E LISTA OS FILMES
  ngOnInit(): void {
    this.nome = ''
    this.filmesService.getFilmes()
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

  //PESQUISA FILME POR NOME OU LETRA
  pesquisar() {
    if (this.nome != "") {
      this.filmes = this.filmes.filter((res) => {
        return res.nome.toLocaleLowerCase().match(this.nome.toLocaleLowerCase())
      })
    } else if (this.nome == "") {
      this.ngOnInit()
    }
  }

  //MÉTODO PARA LIMPAR CAMPO DE PESQUISA AO SER CLICADO
  apagarPesquisa() {
    this.nome = ''
  }


}
