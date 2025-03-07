import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  options = [
    {
      title: 'Subir uñas',
      image: '../../../assets/img/icons/create_nails.webp',
      route: '/nailForm'
    },
    {
      title: 'Crear categorias',
      image: '../../../assets/img/icons/create_categories.webp',
      route: '/typeForm'
    }
  ]

  openNailForm(route: string) {
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }



}
