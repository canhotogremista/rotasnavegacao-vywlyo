import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multi-tabela-detalhe',
  templateUrl: './multi-tabela-detalhe.component.html',
  styleUrls: ['./multi-tabela-detalhe.component.css'],
})
export class MultiTabelaDetalheComponent implements OnInit {
  n: number = 0;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => (this.n = Number(params.get('n')))
    );
  }
}
