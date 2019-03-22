import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as myReducers from './reducers';
import * as tasksReducers from '../tasks/reducers';
import * as profileReducer from '../ProfilePage/reducers';
import * as userReducer from '../Users/reducers';
import * as usersReducers from '../Users/reducers';
import * as commentsReducers from '../TaskInfo/commentReducer';
import * as addCommentReducers from '../TaskInfo/addCommentReducer';
import * as loginReducer from '../LoginPage/reducers';
import * as registrationReducer from '../RegistrationPage/reducers';

import * as topUsers from '../mainPages/reducers';

import * as addNewTaskReducer from '../addTaskPage/reducer';
import * as addExcecutor from '../TaskInfo/addExcecutorReducer';


export default function configureStore(history, initialState) {
  const reducers = {
    weatherForecasts: myReducers.reducer,
    tasksReducers: tasksReducers.reducer,
    profilePage: profileReducer.reducer,
    userRoles: userReducer.reducer,
    loginReducer: loginReducer.reducer,
    registrationReducer: registrationReducer.reducer,
    taskProfilePage: myReducers.reducer,
    usersReducers: usersReducers.reducer,
    commentsTask: commentsReducers.reducer,
    addComment: addCommentReducers.reducer,
    commentsTask: commentsReducers.reducer,
    topUsers:topUsers.reducer
    addTask: addNewTaskReducer.reducer,
    addNewExcecutor: addExcecutor.reducer
  };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
