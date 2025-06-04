import { createReducer, on } from '@ngrx/store';
import { initialNailState } from '../state/nails.state';
import { getAllNailsSuccess } from '../actions/nails.actions';

export const nailReducer = createReducer(
  initialNailState,
  on(getAllNailsSuccess, (state, { nailsType }) => ({
    ...state,
    nailsType,
  }))
)
