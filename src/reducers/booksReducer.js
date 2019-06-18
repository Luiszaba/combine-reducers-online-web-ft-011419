import uuid from 'uuid';

function booksReducer(state = [], action){
    let idx;
    switch (action.type) {
      case "ADD_BOOK":
        return [...state, action.book];
  
      case "REMOVE_BOOK":
        idx = state.indexOf(action.id)
        return [
          ...state.slice(0, idx), 
          ...state.slice(idx + 1)
        ];
      
      case "ADD_BOOK":
          let existingAuthor = state.filter(
              author => author.authorName === action.book.authorName
            );
          if (existingAuthor.length > 0) {
            return state;
          } else {
            return [...state, { authorName: action.book.authorName, id: uuid() }];
          }
  
        default: 
        return state;
      }
    };
export default booksReducer;