import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { MoneyHttp } from './money-http';
import { Http, RequestOptions } from '@angular/http';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { FormsModule } from '@angular/forms';
import { SegurancaRoutingModule } from './seguranca.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LogoutService } from './logout.service';
import { environment } from 'environments/environment.prod';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter, 
        whitelistedDomains:environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),

    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    AuthGuard,
    LogoutService
  ]
})
export class SegurancaModule { }
