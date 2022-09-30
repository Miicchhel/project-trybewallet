import {
  ACT_SUBMIT_EMAIL,
  ACT_GET_RESPONSE_API,
  // ACT_SUBMIT_EXPENSES,
} from './actionTypes';

// função para fazer a chamada da API
export const getDataAPI = async () => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  const data = await response.json();
  delete data.USDT;
  return data;
};

// Coloque aqui suas actions
export const submitEmail = (email) => ({ type: ACT_SUBMIT_EMAIL, payload: { email } });

const getResponseAPI = (responseAPI) => (
  { type: ACT_GET_RESPONSE_API, payload: { responseAPI } }
);

export function fetchCurrencies() {
  return async (dispatch) => {
    const currencies = await getDataAPI();
    return dispatch(getResponseAPI(currencies));
  };
}
