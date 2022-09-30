import { ACT_GET_RESPONSE_API } from '../actions/actionTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  responseAPI: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACT_GET_RESPONSE_API:
    return {
      ...state,
      responseAPI: action.payload.responseAPI,
      currencies: action.payload.responseAPI.map((currencies) => currencies[0]),
    };
  default:
    return state;
  }
};

export default walletReducer;
