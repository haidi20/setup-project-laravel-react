export const number    = { type: 'number' };
export const email     = { type: 'email' };
export const required  = { required: true };
export const minChar   = min => ({ min: min });
export const minNumber = min => ({...number, min: min});
export const validator = func => ({validator: func});