import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const incrementBy = createAction('[Counter Component] IncrementByValue',props<{theValue:number}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
