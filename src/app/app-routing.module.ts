import { FilmeDetalheComponent } from './components/filme-detalhe/filme-detalhe.component';
import { TodosComponent } from './components/todos/todos.component';
import { FiccaoCientificaComponent } from './components/ficcao-cientifica/ficcao-cientifica.component';
import { ComediaComponent } from './components/comedia/comedia.component';
import { TerrorComponent } from './components/terror/terror.component';
import { AcaoComponent } from './components/acao/acao.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acao', component: AcaoComponent },
  { path: 'terror', component: TerrorComponent },
  { path: 'comedia', component: ComediaComponent },
  { path: 'ficcao-cientifica', component: FiccaoCientificaComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'filme-detalhe/:id', component: FilmeDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
