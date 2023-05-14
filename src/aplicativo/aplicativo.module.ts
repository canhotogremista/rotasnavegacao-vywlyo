import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RaizComponent } from './../raiz/raiz.component';
import { BarraNavegacaoComponent } from './../barra-navegacao/barra-navegacao.component';
import { HomeComponent } from './../home/home.component';
import { MultiTabelaComponent } from './../multi-tabela/multi-tabela.component';
import { SobreComponent } from './../sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { MultiTabelaDetalheComponent } from './../multi-tabela-detalhe/multi-tabela-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'multiTabela', component: MultiTabelaComponent },
      { path: 'multiTabelaDetalhe/:n', component: MultiTabelaDetalheComponent },
    ]),
  ],
  declarations: [
    RaizComponent,
    BarraNavegacaoComponent,
    HomeComponent,
    MultiTabelaComponent,
    SobreComponent,
  ],
  bootstrap: [RaizComponent],
})
export class AplicativoModule {}
