import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormIsOpen(false);
    };

    const [formOpen, setFormIsOpen] = useState(false);

    const addExpenseHandler = () => {
        setFormIsOpen(true);
    };

    const cancelHandler = () => {
        setFormIsOpen(false);
    };
    
    return (
        <div className='new-expense'>
            {formOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler} />}
            {!formOpen && <button onClick={addExpenseHandler}>Add Expense</button>}
        </div>
    );
};

export default NewExpense;
