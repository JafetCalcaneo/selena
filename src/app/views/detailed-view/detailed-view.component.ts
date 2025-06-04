import { Component } from "@angular/core";
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute } from "@angular/router";
import { NailService } from '../dashboard/nail.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { environment } from "../../../enviroments/enviroment";

@Component({
    selector: 'app-detailed-view',
    imports: [MatChipsModule, MatIconModule, RouterLink],
    templateUrl: './detailed-view.component.html',
    styleUrl: './detailed-view.component.css'
})
export class DetailedView {

    constructor(private route: ActivatedRoute, private _nailService: NailService) {}

    product: any;
    category: string = '';
    hostUrl: string = environment._hostUrl;
    ngOnInit() {
        const productId = Number(this.route.snapshot.paramMap.get('idType'));
        this._nailService.getNailById(productId).subscribe({
          next: (res) => {
            this.product = res;
            if(res.category){
              this.category = res.category.name;
            }
          }
        })
    }

    // getType() {
    //   this._nailService.ge
    // }
}
