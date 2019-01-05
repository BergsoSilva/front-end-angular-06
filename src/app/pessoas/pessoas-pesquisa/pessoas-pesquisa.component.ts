import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { PessoaFiltro, PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private erroHandler: ErrorHandlerService,
    private confirmation: ConfirmationService
    ) { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.pesquisar(this.filtro.pagina)
        this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso' })
      })
      .catch(erro => this.erroHandler.handle(erro));

  }

  alternarStatus(pessoa: any): void {
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        pessoa.ativo = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Pessoa ${ acao } com sucesso!` });
      })
      .catch(erro => this.erroHandler.handle(erro));
  }

}
