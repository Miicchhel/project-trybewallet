import {
  ACT_CHECK_EDIT_BTN,
  ACT_DELETE_BTN,
  ACT_EDIT_BTN,
  ACT_SUBMIT_CURRENCIES,
  ACT_SUBMIT_EXPENSES,
} from '../actions/actionTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  checkEditBtn: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACT_SUBMIT_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload.responseAPI),
      responseAPI: action.payload.responseAPI,
    };

  case ACT_SUBMIT_EXPENSES:
    // console.log(action);
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };

  case ACT_DELETE_BTN:
    // console.log(action);
    return {
      ...state,
      expenses: action.payload.expenses,
    };

  case ACT_CHECK_EDIT_BTN:
    // console.log(action);
    return {
      ...state,
      checkEditBtn: true,
      idToEdit: action.payload.idToEdit,
    };

  case ACT_EDIT_BTN:
    // console.log('state no edit:', state);
    // console.log('action no edit:', action);
    return {
      ...state,
      checkEditBtn: false,
      expenses: action.payload.expenses,
    };

  default:
    return state;
  }
};

export default walletReducer;

// if (action.payload.expense.id === ele.id) {
//   return action.expense;
// }
// return ele;
