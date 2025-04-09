import { NailService } from './../dashboard/nail.service';
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

    constructor(private router: Router, private nailService: NailsService, private _nailService: NailService){}
    nails = [] as Nail[];
    urlImage: string = 'http://localhost:3000';

    ngOnInit() {
        // this.nails = this.nailService.getAllNails();
        this._nailService.getAllNails().subscribe({
          next: ((res: {nails: Nail[]}) => {
            this.nails = res.nails
            console.log(res)
          })
        })
        console.log(this.nails)
    }



    openDetailedView(productId: any) {
        this.router.navigate(['/detailed', productId]);
    }


}
