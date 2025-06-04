import { NailService } from '../../../views/dashboard/nail.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAllNailTypes,
  getAllNailsFail,
  getAllNailsSuccess,
} from '../actions/nails.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class NailsEffects {
  constructor(private actions: Actions, private nailService: NailService) {}

  getAllNails = createEffect(() =>
    this.actions.pipe(
      ofType(getAllNailTypes),
      switchMap(() =>
        this.nailService.getAllNailTypes().pipe(
          map((nailsType) => getAllNailsSuccess({ nailsType })),
          catchError((error) => of(getAllNailsFail({ error })))
        )
      )
    )
  );
}
