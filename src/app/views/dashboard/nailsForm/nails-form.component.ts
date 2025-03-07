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

@Component({
  selector: 'app-nails-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonAnimationDirective, MatIconModule],
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
  }

  get isValid() {
    return !this.nailForm.valid;
  }

  getCategories() {
    this.nailService.getAllNailTypes().subscribe({
      next: (( res: any) => this.types = res)
    })
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
    console.log(input.files[0]);
    console.log(input.files);
    this.selectedFile = input.files[0];
    console.log(this.selectedFile);
  }

  sendData() {
    const formData = new FormData();
    const { name, description, price, category } = this.nailForm.value;

    formData.append('image', this.selectedFile);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);

    this.nailService.saveFormData(formData).subscribe({
      next: (res) => console.log(res),
    });
  }
}
