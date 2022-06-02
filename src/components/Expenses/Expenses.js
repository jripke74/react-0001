import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilterYear from './ExpensesFilterYear';
import ExpensesFilterMonth from './ExpensesFilterMonth';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredMonth, setFilteredMonth] = useState('January');

  const filterChangeHandlerYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterChangeHandlerMonth = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear &&
      expense.date.toLocaleString('en-us', { month: 'long' }) === filteredMonth
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilterYear
          selected={filteredYear}
          onChangeFilter={filterChangeHandlerYear}
        />
        <ExpensesFilterMonth
          selected={filteredMonth}
          onChangeFilter={filterChangeHandlerMonth}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
