import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitEmail } from '../redux/actions';
import { Link } from 'react-router-dom';

const minLengt = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  checkButton = () => {
    const { email, password } = this.state;
    if (email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{3}$/g) && password.length >= minLengt) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.checkButton());
  };

  handleBtnClick = () => {
    const { email } = this.state;
    const { FunctionSubmitEmail } = this.props;
    FunctionSubmitEmail(email);
    // history.push('/carteira'); // tirei porque tava quebrando o teste não sei pq
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <section>
        <form>
          <labe htmlFor="email">
            <input
              value={ email }
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </labe>
          <labe htmlFor="password">
            <input
              valeu={ password }
              name="password"
              type="text"
              id="password"
              placeholder="Senha"
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </labe>
          <Link to="/carteira">
            <button
              type="button"
              id="button"
              disabled={ isDisabled }
              onClick={ this.handleBtnClick }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  FunctionSubmitEmail: (email) => dispatch(submitEmail(email)),
});

Login.propTypes = {
  history: PropTypes.func.isRequired,
  FunctionSubmitEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
