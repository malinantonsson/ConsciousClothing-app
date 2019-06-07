import { status } from "Constants/outfits";

import initialState from "./initialState";

export default function outfitReducer(state = initialState, action) {
  switch (action.type) {
    case status.SUCCESS:
      return {
        isLoading: false,
        outfits: action.payload
      };
    default:
      return state;
  }
}
