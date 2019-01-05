import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
    .then(()=> {
      this.router.navigate(['/dashboard']);
      this.messageService.add({ severity: 'success', detail: 'Login efetuado com sucesso!'});
    })
    .catch(erro => {
      this.errorHandler.handle(erro);
    });
  }

}
