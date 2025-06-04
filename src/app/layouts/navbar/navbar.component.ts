import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../auth/auth.service';
import { NailService } from '../../views/dashboard/nail.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllNailTypes } from '../../store/nails/actions/nails.actions';
import { selectAllNailsType } from '../../store/nails/selectors/nails.selector';
import { Nail } from '../../interfaces/nail.interface';
import { nailType } from '../../interfaces/nailType.interface';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive, CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isProfileHidden: boolean = true;
  isMenuHidden: boolean = true;
  isLogged: boolean = false;
  categoriesMenu!: nailType[];


  private isLoginSubscription!: Subscription;

  constructor(private _loginService: LoginService, private _nailService: NailService, private store: Store, private router: Router) {}

  ngOnInit() {

    this.store.dispatch(getAllNailTypes());
    this.store.select(selectAllNailsType).subscribe( nails => {
      this.categoriesMenu = nails.map((nailType) => {
        return {
          ...nailType,
          route: `nails/${nailType.name}`
        }
      })
    })
    this.isLoginSubscription = this._loginService.isLogged.subscribe({
      next: (res) => this.isLogged = res,
    });

  }

  openCategory(route: string = '/', id: string) {
    this.router.navigate([route, id], {
      state: { id },
    });
  }

  openProfileMenu () {
    if(this.isLogged) {
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
