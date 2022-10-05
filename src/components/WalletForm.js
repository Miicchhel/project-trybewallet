import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getDataAPI,
  fetchCurrencies,
  submitExpenses,
} from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  async componentDidMount() {
    const { executeFetchCurrencies, checkEdit, expenses, idToEdit } = this.props;
    executeFetchCurrencies();

    // if (checkEdit) {
    //   const test = expenses.find((item) => item.id === idToEdit);
    //   console.log('componentDidMount');
    //   this.setState({
    //     value: test.value,
    //     description: test.description,
    //     currency: test.currency,
    //     method: test.method,
    //     tag: test.tag,
    //   });
    // }
  }

  componentWillUpdate() {
    const { checkEdit, expenses, idToEdit } = this.props;
    console.log('chamou o testando');
    if (checkEdit) {
      const test = expenses.find((item) => item.id === idToEdit);
      this.setState({
        value: test.value,
        description: test.description,
        currency: test.currency,
        method: test.method,
        tag: test.tag,
      });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmite = async () => {
    const { expenses, executeSubmitExpenses } = this.props;
    const exchangeRates = await getDataAPI();
    executeSubmitExpenses({ id: expenses.length, ...this.state, exchangeRates });
    this.setState({ value: '', description: '' });
  };

  handleEditSubmitForm = () => {
    const { expenses, idToEdit } = this.props;
    const test = expenses.find((item) => item.id === idToEdit);
    console.log('teste:', test);
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, checkEdit } = this.props;
    // console.log(checkEdit);
    this.testando();
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            value={ value }
            name="value"
            type="number"
            id="value"
            placeholder="Valor"
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            value={ description }
            name="description"
            type="text"
            id="description"
            placeholder="Descrição"
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            value={ currency }
            name="currency"
            id="currency"
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            { currencies.map((item) => <option key={ item }>{ item }</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            value={ method }
            name="method"
            id="method"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            value={ tag }
            name="tag"
            id="tag"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        {
          !checkEdit ? (
            <button
              type="button"
              onClick={ this.handleFormSubmite }
            >
              Adicionar despesa
            </button>)
            : (
              <button
                type="button"
                onClick={ this.handleEditSubmitForm }
              >
                Editar despesa
              </button>
            )
        }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  executeFetchCurrencies: () => dispatch(fetchCurrencies()),
  executeSubmitExpenses: (expenses) => dispatch(submitExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  responseAPI: state.wallet.responseAPI,
  expenses: state.wallet.expenses,
  checkEdit: state.wallet.checkEditBtn,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  fetchAPI: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
