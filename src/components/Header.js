import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumTotal = () => {
    const { expenses } = this.props;
    const arrayValues = expenses.map((item) => (
      Number(item.value) * Number(item.exchangeRates[item.currency].ask)
    ));
    const totalValue = arrayValues.reduce((current, next) => current + next, 0);
    return totalValue;
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <span data-testid="total-field">{this.sumTotal().toFixed(2)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.total,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  executeSumExpenses: (value) => dispatch(sumExpenses(value)),
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
