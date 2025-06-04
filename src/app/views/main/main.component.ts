import { Component } from '@angular/core';
import { BannerComponent } from '../../layouts/banner/banner.component';
import { ProductsCarouselComponent } from '../../layouts/products-carousel/products-carousel.component';

@Component({
    selector: 'app-main',
    imports: [BannerComponent, ProductsCarouselComponent],
    templateUrl: './main.component.html'
})
export class MainComponent {

}
