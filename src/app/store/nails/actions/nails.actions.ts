import { createAction, props } from '@ngrx/store';
import { nailType } from '../../../interfaces/nailType.interface';
import { Nail } from '../../../interfaces/nail.interface';
export const getAllNailTypes = createAction(
  '[NavBar Component] Tipos de uñas',
);

export const getAllNailsSuccess = createAction('[NavBar Component] Load Nails Success', props<
  {
    nailsType: any
  }>());

export const getAllNailsFail = createAction('[Navbar Component] Load Nails Fail', props<
  {
    error: any
  }>())

