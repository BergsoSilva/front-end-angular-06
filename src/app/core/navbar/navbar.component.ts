import { Router } from '@angular/router';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { LogoutService } from './../../seguranca/logout.service';
import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService,
    
  ) { }

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout()
    .then(() => {
      this.router.navigate(['/login']);
      this.messageService.add({severity: 'info', detail: 'Opa vai tomar um café? Até breve!' });
    })

    .catch(erro => this.errorHandler.handle(erro));
  }
}
