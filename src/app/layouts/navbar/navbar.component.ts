import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../auth/auth.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isProfileHidden: boolean = true;
  isMenuHidden: boolean = true;
  isLogged: boolean = false;
  private isLoginSubscription!: Subscription;

  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this.isLoginSubscription = this._loginService.isLogged.subscribe({
      next: (res) => this.isLogged = res,
    });
  }


  openProfileMenu () {
    console.log(this.isLogged);
    if(this.isLogged) {
      console.log('Entra')
      this.isProfileHidden = !this.isProfileHidden;
    } else {
      this.isProfileHidden = true;
    }
  }

  openMenu () {
    this.isMenuHidden = !this.isMenuHidden;
  }

  logOut() {
    this._loginService.logOut();
  }

  ngOnDestroy() {
    this.isLoginSubscription.unsubscribe();
  }


}
