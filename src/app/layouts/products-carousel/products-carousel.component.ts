import { Component } from '@angular/core';
import { NailService } from '../../../app/views/dashboard/nail.service';
import { Nail } from '../../interfaces/nail.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-carousel',
  standalone: true,
  imports: [],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.css'
})
export class ProductsCarouselComponent {

  constructor(private nailService: NailService, private router: Router) {}

  items = [1, 2, 3, 4]; // Contenido del carrusel
  currentIndex = 1; // Índice inicial
  itemWidth = 300; // Ancho del ítem (ajustar según CSS)
  folderPath: string = '../../../assets/img/';
  urlImage: string = 'http://localhost:3000'
  carousel: any;
  // images: any;
  totalImages: number = 0;
  // currentIndex: number = 0;
  isFirst: boolean = false;
  imagesURL = [
    "../../../assets/img/carrusel-1.webp",
    "../../../assets/img/carrusel-2.jpg",
    "../../../assets/img/carrusel-3.jpg",
    "../../../assets/img/carrusel-4.jpg",
    "../../../assets/img/carrusel-5.jpg",
    "../../../assets/img/carrusel-6.jpg",
    "../../../assets/img/carrusel-7.jpg",
    "../../../assets/img/carrusel-8.jpg",
  ]
  imagesObjects = [...this.imagesURL.map((element, index) => {
    return {
      id: index + 1,
      url: element,
    }
  })]

  images = [] as any;

  ngOnInit() {
    this.nailService.getAllNails().subscribe({
      next: (res) => this.images = res.nails
    })
    console.log(this.images)
  }

  openDetailedView(idProduct: number) {
    this.router.navigate(['/detailed', idProduct]);
  }

  // images = [
  //   {
  //     id: 1,
  //     url: "../../../assets/img/foto1.jpeg",
  //     title: "Acrilicas",
  //   },
  //   {
  //     id: 2,
  //     url: "../../../assets/img/foto2.jpeg",
  //     title: "Esculturales",
  //   },
  //   {
  //     id: 3,
  //     url: "../../../assets/img/foto3.jpeg",
  //     title: "Baño de acrilico",
  //   },
  //   {
  //     id: 4,
  //     url: "../../../assets/img/foto4.jpeg",
  //     title: "Manicure",
  //   },
  //   {
  //     id: 5,
  //     url: "../../../assets/img/foto5.jpeg",
  //     title: "Pedicure",
  //   },
  //   {
  //     id: 6,
  //     url: "../../../assets/img/foto6.jpeg",
  //     title: "Navideñas",
  //   },
  //   {
  //     id: 7,
  //     url: "../../../assets/img/foto7.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 8,
  //     url: "../../../assets/img/foto8.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 9,
  //     url: "../../../assets/img/foto9.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 10,
  //     url: "../../../assets/img/foto10.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 11,
  //     url: "../../../assets/img/foto11.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 12,
  //     url: "../../../assets/img/foto12.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 13,
  //     url: "../../../assets/img/foto13.jpeg",
  //     title: "",
  //   },
  //   {
  //     id: 14,
  //     url: "../../../assets/img/foto14.jpeg",
  //     title: "",
  //   }
  // ]


processingButton (event: Event) {
  const btn = event.currentTarget as HTMLButtonElement;
  const track = document.querySelector('#track') as HTMLElement;
  // Verificar si el carrusel y el track existen
  if (!track) return;

  const carruseles = track.querySelectorAll('.carrusel');
  if (!carruseles.length) return;
  const carruselWidth = (carruseles[0] as HTMLElement).offsetWidth; // Ancho de un carrusel
  const currentLeft = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  currentLeft == 0 ? this.isFirst = true : this.isFirst = false;

  // Determinar dirección (prev o next)
  const isPrev = btn.dataset?.['button'] === 'button-prev';
  const maxScroll = -(carruselWidth * (carruseles.length - 5)); // Hasta dónde se puede desplazar

  let newLeft = isPrev ? currentLeft + carruselWidth : currentLeft - carruselWidth;
  // Limitar movimiento
  if (newLeft > 0)  newLeft = 0;
  // No puede ir más a la izquierda
  if (newLeft < maxScroll) newLeft = maxScroll; // No puede ir más a la derecha

  // Aplicar movimiento al track
  track.style.transform = `translateX(${newLeft}px)`;
  // this.moveElement(isPrev);


}


// moveElement (isPrev: boolean = false) {
//   if(!isPrev) {
//     const firstElementRemoved = this.imagesObjects.slice(0, 1);
//     const newArray = this.imagesObjects.filter((element) => element.id !== firstElementRemoved[0].id);
//     this.imagesObjects = newArray;
//     this.imagesObjects.push(firstElementRemoved[0]);
//   } else {
//     const lastElementRemoved = this.imagesObjects.slice(this.imagesObjects.length - 1, this.imagesObjects.length);
//     const newArray = this.imagesObjects.filter((element) => element.id !== lastElementRemoved[0].id);
//     this.imagesObjects = newArray;
//     this.imagesObjects.unshift(lastElementRemoved[0]);
//   }
//   // const index = this.imagesObjects.findIndex((element) => element.id === id);
//   // if (index === -1) return;

//   // const newArray = this.imagesObjects.filter((element) => element.id !== id);
//   // const dropedElement = this.imagesObjects.find(element => element.id === id);
//   // console.log(dropedElement);
//   // this.imagesObjects = newArray;

//   // if(dropedElement && !isPrev) {
//   //   this.imagesObjects.push(dropedElement)
//   // } else if(dropedElement && isPrev) {
//   //   this.imagesObjects.unshift(dropedElement)

//   // }

// }


}
