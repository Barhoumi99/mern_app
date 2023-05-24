import React from "react";
import { styled } from "styled-components";

const Transaction = ({ transaction }) => {
  const { title, amount, type, category, date } = transaction;
  return (
    <TransactionStyled>
      <div className="logo"></div>
      <span className="title">{title}</span>
      <span className={type === "expense" ? "expense" : "income"}>
        {type === "expense" ? "-" : "+"} $ {amount}
      </span>
      <span className="date">
        {date.toString().split(" ").slice(0, 3).join(" ")}
      </span>
    </TransactionStyled>
  );
};

const TransactionStyled = styled.div`
  display: grid;
  grid-template-columns: 15% 30% 30% 25%;
  margin: 20px 30px;
  padding: 10px;
  background-color: #222222;
  border-radius: 10px;
  height: 50px;
  font-family: 'Wix Madefor Display', sans-serif;
  letter-spacing: 1px;
  .title, .expense, .income, {
    font-size: 1.2rem;
    line-height: 50px;
    font-weight: 600;
  }
  .expense {
    color: #dc1802;
  }
  .income {
    color: #12e102
  }
  .date {
    font-size: .8rem;
    line-height: 50px;
  }
  `;
export default Transaction;
