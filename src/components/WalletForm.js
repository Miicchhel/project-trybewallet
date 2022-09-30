import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { executeFetchAPI } = this.props;
    executeFetchAPI();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <main>
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
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  executeFetchAPI: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  fetchAPI: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
