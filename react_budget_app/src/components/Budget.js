
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        //  <input type="number" id="points" name="points" step="3">
        <div className='alert alert-secondary'>
            
            <span>Budget: £</span>
            <input type='Number' id='budget' name='budget' value={budget} step="1"></input>
        </div>
    );
};
export default Budget;