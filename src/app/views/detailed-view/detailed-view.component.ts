import { Component } from "@angular/core";
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute } from "@angular/router";
import { NailsService } from "../../services/nails.service";



@Component({
    selector: 'app-detailed-view',
    standalone: true,
    imports: [MatChipsModule],
    templateUrl: './detailed-view.component.html',
    styleUrl: './detailed-view.component.css'
})
export class DetailedView {

    constructor(private route: ActivatedRoute, private nailService: NailsService) {}

    product: any = {};

    ngOnInit() {
        const productId = Number(this.route.snapshot.paramMap.get('id'));
        this.product = this.nailService.getNailById(productId);
    }
}