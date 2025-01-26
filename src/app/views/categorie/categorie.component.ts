import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Nail } from "../../interfaces/nail.interface";
import { NailsService } from "../../services/nails.service";

@Component({
    selector: 'app-categorie',
    standalone: true,
    templateUrl: './categorie.component.html',
    styleUrl: './categorie.component.css'
})
export class CategorieComponent {

    constructor(private router: Router, private nailService: NailsService){}
    nails = [] as Nail[];

    ngOnInit() {
        this.nails = this.nailService.getAllNails();
    }

    // nails: any = [
    //     {
    //         id: 1,
    //         src: '../../../assets/img/foto1.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 2,
    //         src: '../../../assets/img/foto2.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 3,
    //         src: '../../../assets/img/foto3.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 4,
    //         src: '../../../assets/img/foto4.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 5,
    //         src: '../../../assets/img/foto5.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 6,
    //         src: '../../../assets/img/foto6.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 7,
    //         src: '../../../assets/img/foto7.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 8,
    //         src: '../../../assets/img/foto8.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 9,
    //         src: '../../../assets/img/foto9.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 10,
    //         src: '../../../assets/img/foto10.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 11,
    //         src: '../../../assets/img/foto11.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 12,
    //         src: '../../../assets/img/foto12.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 13,
    //         src: '../../../assets/img/foto13.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     },
    //     {
    //         id: 14,
    //         src: '../../../assets/img/foto14.jpeg',
    //         type: 'Acrilicas',
    //         price: 200,
    //     }
    // ]

    

    openDetailedView(productId: any) {
        this.router.navigate(['/detailed', productId]);
    }


}