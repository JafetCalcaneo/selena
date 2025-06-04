import { catchError, Subscription } from 'rxjs';
import { NailService } from './../dashboard/nail.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nail } from '../../interfaces/nail.interface';
import { NailsService } from '../../services/nails.service';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-categorie',
  standalone: true,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
})
export class CategorieComponent {
  constructor(
    private router: Router,
    private _nailService: NailService,
    private route: ActivatedRoute
  ) {}
  nails = [] as Nail[];
  urlHost: string = environment._hostUrl;
  type: string = '';
  idType: string = '';
  private categorySubscripton!: Subscription;

  ngOnInit() {
    this.categorySubscripton = this.route.paramMap.subscribe((params) => {
      const id = params.get('idType');
      this.loadNails(id);
    });
  }

  private loadNails(id: string | null): void {
    if (id) {
      this._nailService.getCategoryNailsById(id).subscribe({
        next: (res) => {
          if (res.length) {
            this.type = res[0].category?.name || '';
          } else {
            this.type = '';
          }
          this.nails = res;
        },
      });
    } else {
      this._nailService.getAllNails().subscribe({
        next: (res) => {
          this.type = 'Todos los modelos';
          this.nails = res
        },
      });
    }
  }

  openDetailedView(productId: any): void {
    this.router.navigate(['/detailed', productId]);
  }

  ngOnDestroy() {
    this.categorySubscripton.unsubscribe();
  }
}
