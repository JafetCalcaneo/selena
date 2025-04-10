import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NailService } from '../nail.service';
import { nailType } from '../../../interfaces/nailType.interface';
import { ButtonAnimationDirective } from '../../../directives/button-animation.directive';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nails-type-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonAnimationDirective, MatIconModule, RouterLink],
  templateUrl: './nails-type-form.component.html',
  styleUrl: './nails-type-form.component.css'
})
export class NailsTypeFormComponent {

    // @ts-ignore
    nailForm: FormGroup;
    nailType: string = '';
    types: nailType[] = [];

    constructor(
      private formBuilder: FormBuilder,
      private _toastr: ToastrService,
      private nailService: NailService
    ) {
      this.nailForm = this.formBuilder.group({
        name: ['', Validators.required],
      });
      console.log(this.types)
    }

    ngOnInit() {
      this.getAllTypes();

    }

  get isValid() {
    return !this.nailForm.valid;
  }

  validateForm() {
    if (!!this.isValid) {
      this._toastr.error('Completa los campos obligatorios');
    } else {
      this.sendData();
    }
  }


  sendData() {
    const { name } = this.nailForm.value;
    this.nailService.saveNailType(name).subscribe({
      next: (( res: nailType ) => {
        this.types.push(res)
        this._toastr.success('Tipo agregado correctamente');
      })
    })
  }

  getAllTypes() {
    this.nailService.getAllNailTypes().subscribe({
      next: (( res: any) => {
        this.types = res.types
        console.log(this.types)
      })
    })
  }




}
