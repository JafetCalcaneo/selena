import { Component } from '@angular/core';
// import fs from 'node:fs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  items = [1, 2, 3, 4]; // Contenido del carrusel
  currentIndex = 1; // Índice inicial
  itemWidth = 300; // Ancho del ítem (ajustar según CSS)
  folderPath: string = '../../../assets/img/';
  carousel: any;
  images: any;
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