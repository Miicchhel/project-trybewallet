import React, { Component } from 'react';

class Table extends Component {
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

    return (
      <table>
        <thead>
          <tr>
            { tableHead.map((item, index) => <th key={ index }>{ item }</th>)}
          </tr>
        </thead>
        {/* <tbody>
          <tr>

          </tr>
        </tbody> */}
      </table>
    );
  }
}

export default Table;
