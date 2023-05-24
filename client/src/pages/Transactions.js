import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import Transaction from "../components/Transaction";
import { dummyTransactions } from "../assets/dummyTransactions";

const Transactions = () => {
  const [filter, setFilter] = useState('all')
  // const transactions = useSelector(state => state.transactions)
  const transactions = dummyTransactions;
  return (
    <TransactionsStyled>
      {transactions.map((transaction) => (
        <Transaction
          transaction={transaction}
          key={transactions.indexOf(transaction)}
        />
      ))}
    </TransactionsStyled>
  );
};

const TransactionsStyled = styled.div`
  text-align: center;
  margin-left: 200px;
  background-color: #102632;
  color: #fff;
  padding: 30px;
`;
export default Transactions;
