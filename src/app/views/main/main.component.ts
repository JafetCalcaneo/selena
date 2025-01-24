import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { BannerComponent } from '../../layouts/banner/banner.component';
import { ProductsCarouselComponent } from '../../layouts/products-carousel/products-carousel.component';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [NavbarComponent, FooterComponent, BannerComponent, ProductsCarouselComponent],
    templateUrl: './main.component.html',
})
export class MainComponent {

}