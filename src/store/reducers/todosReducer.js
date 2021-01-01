const initialState = {
  tasks: [],
  filteredTasks: [],
  searchValue: ""
};

export const todoReducer = (state = initialState, action) => {
  let data = null;
  switch (action.type) {

    case 'ADD':
      data = [...state.tasks, action.task];
      return {
        ...state,
        tasks: data,
        filteredTasks: data,
      };
    case 'DEL':
      data = state.tasks.filter(t => t.id !== action.id);
      return {
        ...state,
        tasks: data,
        filteredTasks: data,
      };
    case 'COMPELTE':
      data = state.tasks.map(t => ({ ...t, isCompleted: action.id === t.id ? !t.isCompleted : t.isCompleted }))
      return {
        ...state,
        tasks: data,
        filteredTasks: data,
      }
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.searchValue,
        filteredTasks: action.searchValue ? state.tasks.filter(t => t.description.includes(action.searchValue)) : state.tasks
      }
    default:
      return state;
  }
};
