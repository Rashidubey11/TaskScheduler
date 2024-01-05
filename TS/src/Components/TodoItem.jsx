function TodoItem({ todoName, todoDate, onDeleteClick }) {
    return (
      <div className="container">
        <div className="row Todo-row ">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger Todo-btn"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  