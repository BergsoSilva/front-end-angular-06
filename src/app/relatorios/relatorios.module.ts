import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    FormsModule,

    CalendarModule,

    SharedModule
  ],
  declarations: [ RelatorioLancamentosComponent ]
})
export class RelatoriosModule { }
