// import { Checkbox } from '@material-ui/core'
import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
         dispatch(setCheck(id))
    }
    return (
        <div className='todoItem'>
            {/**checkbox */}
            <Checkbox
              checked={done}
              color="primary"
              onChange={handleCheck}
              inputProps={{'aria-label': 'secondary checkbox'}}
              />
            {/**name */}
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem
