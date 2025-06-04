import { createSelector, createFeatureSelector } from '@ngrx/store';
import { nailState } from '../state/nails.state';

export const selectNailState = createFeatureSelector<nailState>('nail');


export const selectAllNailsType = createSelector(
  selectNailState,
  (state) => state.nailsType
)
