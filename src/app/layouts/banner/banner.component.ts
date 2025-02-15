import { Component } from '@angular/core';
import { Router,  RouterLink, RouterLinkActive } from '@angular/router';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(private router: Router, private _pruebaService: PruebaService) {}
  callEndpoint () {
    const data = this._pruebaService.getData().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    })
  }

}
