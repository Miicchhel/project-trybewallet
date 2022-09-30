import { ACT_SUBMIT_EMAIL, ACT_GET_RESPONSE_API } from './actionTypes';

// Coloque aqui suas actions
export const submitEmail = (email) => ({ type: ACT_SUBMIT_EMAIL, payload: { email } });

const getResponseAPI = (responseAPI) => (
  { type: ACT_GET_RESPONSE_API, payload: { responseAPI } }
);

export function fetchAPI() {
  return async (dispatch) => {
    const endPoint = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(endPoint);
    const json = await response.json();
    delete json.USDT;
    return dispatch(getResponseAPI(Object.entries(json)));
  };
}
