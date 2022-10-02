import {
  ACT_SUBMIT_EMAIL,
  ACT_SUBMIT_CURRENCIES,
  ACT_SUBMIT_EXPENSES,
  ACT_DELETE_BTN,
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

const getResponseAPI = (type, responseAPI) => (
  { type, payload: { responseAPI } }
);

export function fetchCurrencies() {
  return async (dispatch) => {
    const currencies = await getDataAPI();
    return dispatch(getResponseAPI(ACT_SUBMIT_CURRENCIES, currencies));
  };
}

export const submitExpenses = (expenses) => (
  { type: ACT_SUBMIT_EXPENSES, payload: { expenses } }
);

export const deleteBtn = (expenses) => (
  { type: ACT_DELETE_BTN, payload: { expenses } }
);
