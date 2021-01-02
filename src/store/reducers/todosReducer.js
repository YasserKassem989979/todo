import moment from "moment"
const initialState = {
  tasks: [],
  filteredTasks: [],
  dateFilteredTasks: [],
  searchValue: "",
  filterDate: ""
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
        dateFilteredTasks: state.filterDate ? data.filter(t => state.filterDate === moment(t.date).format("YYYY-MM-DD")) : data
      };
    case 'DEL':
      data = state.tasks.filter(t => t.id !== action.id);
      return {
        ...state,
        tasks: data,
        filteredTasks: data,
        dateFilteredTasks: state.filterDate ? data.filter(t => state.filterDate === moment(t.date).format("YYYY-MM-DD")) : data
      };
    case 'COMPELTE':
      data = state.tasks.map(t => ({ ...t, isCompleted: action.id === t.id ? !t.isCompleted : t.isCompleted }))
      return {
        ...state,
        tasks: data,
        filteredTasks: data,
        dateFilteredTasks: state.filterDate ? data.filter(t => state.filterDate === moment(t.date).format("YYYY-MM-DD")) : data
      }
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.searchValue,
        filteredTasks: action.searchValue ? state.tasks.filter(t => t.description.includes(action.searchValue)) : state.tasks
      }
    case "DATE_FILTER":

      return {
        ...state,
        filterDate: action.date,
        dateFilteredTasks: action.date ? state.tasks.filter(t => {
          if (action.date === t.date.slice(0, t.date.length - 6)) {
            return true
          }
          return false
        }) : state.tasks
      }
    default:
      return state;
  }
};
