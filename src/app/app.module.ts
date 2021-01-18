import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcaoComponent } from './components/acao/acao.component';
import { TerrorComponent } from './components/terror/terror.component';
import { ComediaComponent } from './components/comedia/comedia.component';
import { FiccaoCientificaComponent } from './components/ficcao-cientifica/ficcao-cientifica.component';
import { TodosComponent } from './components/todos/todos.component';
import { FilmeDetalheComponent } from './components/filme-detalhe/filme-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AcaoComponent,
    TerrorComponent,
    ComediaComponent,
    FiccaoCientificaComponent,
    TodosComponent,
    FilmeDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
