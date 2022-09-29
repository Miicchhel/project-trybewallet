import { ACT_SUBMIT_EMAIL, ACT_SUBMIT_TESTE } from './actionTypes';

// Coloque aqui suas actions
export const submitEmail = (email) => ({ type: ACT_SUBMIT_EMAIL, payload: { email } });

export const submitTeste = (teste) => ({ type: ACT_SUBMIT_TESTE, payload: { teste } }); // só pra tirar o erro do lint
