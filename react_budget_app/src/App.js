import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// components AllocationForm, ExpenseItem, ExpenseList, ExpenseTotal, 
import Budget from './components/Budget';
import Remaining from './components/Remaining'
import AllocationForm from './components/AllocationForm'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>   

                    <div className='col-sm'>
                        <Remaining />
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                    <h1 className='mt-3'>Allocation</h1>
                    <dev className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    
                    <h1 className='mt-3'>Change Allocation</h1>
                    <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                    </div>
                    </dev>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
