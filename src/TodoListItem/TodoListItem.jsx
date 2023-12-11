const TodoListItem = ({ itemData, onToggle}) => {
  return <div>
    <input type="checkbox" checked={itemData.done} onChange={onToggle}/>
    <span>{itemData.title}</span>
  </div>
}

export default TodoListItem;