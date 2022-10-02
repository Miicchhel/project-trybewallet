import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <WalletForm />
          <Table />
        </main>
      </>
    );
  }
}

export default Wallet;
