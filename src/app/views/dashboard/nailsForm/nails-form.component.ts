import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ButtonAnimationDirective } from '../../../directives/button-animation.directive';
import { MatIconModule } from '@angular/material/icon';
import { NailService } from '../nail.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nails-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonAnimationDirective,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './nails-form.component.html',
  styleUrl: './nails-form.component.css',
})
export class NailsFormComponent {
  // @ts-ignore
  nailForm: FormGroup;
  fileName: string = '';
  selectedFile: any;
  types: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private nailService: NailService
  ) {
    this.nailForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      price: [null, Validators.required],
      image: [null, Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getCategories();
    this.bordes();
  }

  get isValid() {
    return !this.nailForm.valid;
  }

  getCategories() {
    this.nailService.getAllNailTypes().subscribe({
      next: (res: any) => (this.types = res.types),
    });
  }

  validateForm() {
    if (!!this.isValid) {
      this._toastr.error('Completa los campos obligatorios');
    } else {
      this.sendData();
    }
  }

  updateFileName(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.selectedFile = input.files[0];
  }

  sendData() {
    const formData = new FormData();
    const { name, description, price, category } = this.nailForm.value;

    formData.append('image', this.selectedFile);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('nailType', category);

    this.nailService.saveFormData(formData).subscribe({
      next: (res) => res,
    });
  }

  bordes() {
    const yColor = '#fff7ed';
    const xColor = '#e5e7eb';
    // const div = document.querySelector('#back-btn') as HTMLElement;
    // if (div) {
    //   div.style.borderTopColor = xColor;
    //   div.style.borderBottomColor = xColor;
    //   div.style.borderRightColor = yColor;
    //   div.style.borderLeftColor = yColor;
    // }

    const el = document.querySelector('#boton') as HTMLElement;
    // el.style.animation = 'bordes 1s linear infinite';
    // el.style.
    // el.addEventListener('mouseover', () => {
    //   for(let i = 46; i < 360; i++) {
    //     el.style.background = `linear-gradient(${i}deg, red, blue)`;
    //   }
    // });

    // let angle = 55;
    // function animateGradient() {
    //   angle += 1;
    //   if (angle > 360) angle = 0;
    //   console.log('Animacion  ', angle)
    //   el.style.background = `linear-gradient(${angle}deg, red 50%, blue)`;

    //   requestAnimationFrame(animateGradient); // ejecuta en cada frame (~60 fps)
    // }

    // el.addEventListener('mouseenter', () => {
    //   el.style.borderImage = `linear-gradient(${angle}deg, red, blue) 1`;
    //   requestAnimationFrame(animateGradient);
    // });


  }
}
