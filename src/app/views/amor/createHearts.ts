import { Renderer2 } from "@angular/core";

export const createHearts = (render: Renderer2, heartsContainer: any, size = '2rem', corazones = 5) => {

          for (let i = 0; i < corazones; i++) {
                const heart = render.createElement('div');
                heart.className = 'heart';
                heart.style.fontSize = size;
                heart.innerHTML = '♥';
                // heart.style.left = '50%';
                heart.style.top = '100%';
                
                // Posición aleatoria
                heart.style.left = `${Math.random() * 95 }%`;
                // heart.style.top = `${Math.random() * 80 + 10}%`;
                
                // Animación con delay aleatorio
                heart.style.animationDelay = `${Math.random() * 0.5}s`;
                
                heartsContainer.appendChild(heart);
          }
        
        //   setTimeout(() => {
        //     heartsContainer.remove();
        //   }, 10000);
        }