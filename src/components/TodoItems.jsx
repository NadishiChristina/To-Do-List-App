import 'react'
import PropTypes from 'prop-types'
import tick from '../assets/tick.png'
import deleteicon from '../assets/delete.png'
import not_tick from '../assets/not_tick.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt='' className='w-7'/> 
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={() => deleteTodo(id)} src={deleteicon} alt='' className='w-3.5 cursor-pointer'/>
    </div>
  )
}

//Fix: Define prop types for all props
TodoItems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,          // Added id validation
  isComplete: PropTypes.bool.isRequired,    // Added isComplete validation
  deleteTodo: PropTypes.func.isRequired,    // Added deleteTodo validation
  toggle: PropTypes.func.isRequired,   //Added missing toggle prop validation
}

export default TodoItems
