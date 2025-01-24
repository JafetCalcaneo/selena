import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { ProductsCarouselComponent } from './layouts/products-carousel/products-carousel.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, ProductsCarouselComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selena';
}
