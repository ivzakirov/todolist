import { useState } from "react";

const AddTodoItem = ({ onAddItem }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onAddClick = () => {
    onAddItem(value);
    setValue('');
  }

  return <div>
    <input type="text" value={value} onChange={onChange} />
    <button onClick={onAddClick}>Add item</button>
  </div>
}

export default AddTodoItem;