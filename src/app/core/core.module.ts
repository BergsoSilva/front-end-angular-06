import { MoneyHttp } from './../seguranca/money-http';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CategoriaService } from './../categorias/categoria.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { GrowlModule } from 'primeng/growl';
import { JwtHelperService } from '@auth0/angular-jwt';

import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentosService } from './../lancamentos/lancamentos.service';
import { AuthService } from './../seguranca/auth.service';
import { DashboardService } from './../dashboard/dashboard.service';
import { RelatoriosService } from './../relatorios/relatorios.service';

import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    GrowlModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentosService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    AuthService,
    DashboardService,
    RelatoriosService,
    MessageService,
    MoneyHttp,

    ConfirmationService,
    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
