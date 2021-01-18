import { Filmes } from './../shared/filmes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  url = 'assets/FILMES.json'

  constructor(
    private http: HttpClient
  ) { }

  //RETORNA UMA LISTA DE FILMES
  getFilmes(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(`${this.url}`)
      .pipe(map((obj) => {
        return obj['filmes']
      }))
  }

  //RETORNA UMA LISTA DE FILMES FILTRADO POR GÊNERO
  getFilmesCategoria(genero: string): Observable<Filmes[]> {
    let itensEncontrado = []
    return this.http.get<Filmes[]>(`${this.url}`)
      .pipe(map((obj) => {
        obj['filmes'].filter((item) => {
          if (item.genero == [genero]) {
            itensEncontrado.push(item)
          }
        })
        return itensEncontrado
      }))
  }

  //RETORNA UM FILME PELO ID
  getFilmePorId(id: number): Observable<Filmes> {
    return this.http.get<Filmes>(`${this.url}`)
      .pipe(map((obj) => {
        return obj['filmes'][id - 1]
      }))
  }
}
