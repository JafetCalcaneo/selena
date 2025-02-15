import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { createHearts } from './createHearts';

@Component({
  selector: 'app-amor',
  standalone: true,
  imports: [],
  templateUrl: './amor.component.html',
  styleUrl: './amor.component.css'
})
export class AmorComponent {
  @ViewChild('openBtn') openBtn!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('cover') cover!: ElementRef;
  @ViewChild('paper') paper!: ElementRef;
  @ViewChild('containerLetter') containerLetter!: ElementRef;
  @ViewChild('heart') heart!: ElementRef | null;
  @ViewChild('heartsContainer', { static: false }) heartsContainer!: ElementRef | null;

// btnOpenElement = document.querySelector('#open')
// btnCloseElement = document.querySelector('#close')

// this.btnCloseElement.disabled = true

constructor(private render: Renderer2) {}

openLetter() {
  const openBtn = this.openBtn.nativeElement;
  const closeBtn = this.closeBtn.nativeElement;
  const cover = this.cover.nativeElement;
  const paper = this.paper.nativeElement;
  
  openBtn.disabled = true;
  closeBtn.disabled = false;
  cover.classList.add('open-cover');

  setTimeout(() => {
    cover.style.zIndex = -1;
    // cover.style.transform = 'rotateX(180deg)';
    paper.classList.remove('close-paper');
    paper.classList.add('open-paper');

    const heartsContainer = this.render.createElement('div');
    heartsContainer.className = 'heartsContainer';
    this.containerLetter.nativeElement.appendChild(heartsContainer);

    createHearts(this.render, heartsContainer);
    setTimeout(() => createHearts(this.render, heartsContainer), 500);
    setTimeout(() => createHearts(this.render, heartsContainer, '3rem'), 800);
    setTimeout(() => {
      setInterval(() => createHearts(this.render, heartsContainer, '1rem'), 1000);
    }, 1500);

    
  }, 500);
}

closeLetter() {
  const openBtn = this.openBtn.nativeElement;
  const closeBtn = this.closeBtn.nativeElement;
  const cover = this.cover.nativeElement;
  const paper = this.paper.nativeElement;

  openBtn.disabled = false;
  closeBtn.disabled = true;
  paper.classList.remove('open-paper');
  paper.classList.add('close-paper');

  // setTimeout(() => {
  //   cover.style.zIndex = 0;
  //   cover.classList.remove('open-cover');
  //   const heart = document.querySelector('.heart') as HTMLElement;
  //   heart.style.display = 'none';
  // }, 500);

  setTimeout(() => {
    const heartsContainer = document.querySelector('.heartsContainer');
    if(heartsContainer) heartsContainer.remove();

    cover.style.zIndex = 0;
    cover.classList.remove('open-cover');
    // cover.classList.add('close-cover');
    // cover.style.transform = 'rotateX(-180deg)';
  }, 500);

}

}
