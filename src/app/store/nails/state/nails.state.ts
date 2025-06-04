import { nailType } from './../../../interfaces/nailType.interface';
import { Nail } from "../../../interfaces/nail.interface"

export interface nailState {
  nails: Nail[];
  nailsType: nailType[];
}

export const initialNailState: nailState = {
  nails: [],
  nailsType: []
}

