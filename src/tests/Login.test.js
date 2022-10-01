import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';

describe('Testando a tela de Login', () => {
  it('1 - Verificando se há o campo de input do email', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveTextContent('');
  });
  it('2 - Verificando se há o campo de input do password ', () => {
    renderWithRouterAndRedux(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveTextContent('');
  });
  it('3 - Verificando se há o botão "Entrar" e se está desabilitado ', () => {
    renderWithRouterAndRedux(<Login />);
    const btnEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(btnEntrar).toBeInTheDocument();
    expect(btnEntrar).toBeDisabled();
  });
  it('4 - Verificando se o botão "Entrar" é abilitado ao colocar os dados corretos', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(btnEntrar).toBeDisabled();
    userEvent.type(inputEmail, 'michel@teste.com');
    userEvent.type(inputPassword, '123456');
    expect(btnEntrar).not.toBeDisabled();
    userEvent.click(btnEntrar);
  });
});
