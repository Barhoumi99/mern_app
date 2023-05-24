import React from 'react';
import styled from 'styled-components';

const AddTransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddTransaction = () => {
  return (
    <AddTransactionForm>
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" name="amount" />

      <label htmlFor="type">Type:</label>
      <select id="type" name="type">
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" />

      <button onClick={() => {}}>Add</button>
    </AddTransactionForm>
  );
};

export default AddTransaction;
