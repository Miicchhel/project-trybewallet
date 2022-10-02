import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testando a tela de Wallet', () => {
  it('1 - Verificando se há o campo de input do valor', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputValue = screen.getByTestId('value-input');
    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveTextContent('');
  });
  it('2 - Verificando se há o campo de input da descrição', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputDescription = screen.getByTestId('description-input');
    expect(inputDescription).toBeInTheDocument();
    expect(inputDescription).toHaveTextContent('');
  });
  it('3 - Verificando se há o campo de select da moeda', () => {
    renderWithRouterAndRedux(<Wallet />);
    const selectCurrency = screen.getByTestId('currency-input');
    expect(selectCurrency).toBeInTheDocument();
    // expect(selectCurrency).toHaveTextContent('');
  });
  it('4 - Verificando se há o campo de select da moeda', () => {
    renderWithRouterAndRedux(<Wallet />);
    const selectMethod = screen.getByTestId('method-input');
    expect(selectMethod).toBeInTheDocument();
    // expect(selectMethod).toHaveTextContent('');
  });
  it('5 - Verificando se há o campo de select da moeda', () => {
    renderWithRouterAndRedux(<Wallet />);
    const selectTag = screen.getByTestId('tag-input');
    expect(selectTag).toBeInTheDocument();
    // expect(selectTag).toHaveTextContent('');
  });
});
