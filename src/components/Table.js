import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBtn } from '../redux/actions';

class Table extends Component {
  handleDeleteItem = (id) => {
    const { expenses, btnDelete } = this.props;
    const newExpenses = expenses.filter((item) => item.id !== id);
    btnDelete(newExpenses);
  };

  render() {
    const tableHead = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];

    const { expenses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            { tableHead.map((item, index) => <th key={ index }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={ item.id }>
              <td>{ item.description }</td>
              <td>{ item.tag }</td>
              <td>{ item.method }</td>
              <td>{ Number(item.value).toFixed(2) }</td>
              <td>{ item.exchangeRates[item.currency].name }</td>
              <td>{ Number(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
              <td>
                {
                  (
                    Number(item.value) * Number(item.exchangeRates[item.currency].ask)
                  ).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={ () => this.handleDeleteItem(item.id) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  btnDelete: (expenses) => dispatch(deleteBtn(expenses)),
});

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequared;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
