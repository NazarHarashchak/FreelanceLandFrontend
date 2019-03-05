import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as myReducers from './reducers';
import * as tasksReducers from '../tasks/reducers';
import * as profileReducer from '../ProfilePage/reducers';
import * as loginReducer from '../LoginPage/loginStore/reducers';
import * as taskCustomerReducer from '../TaskInfo/userReducer';
import * as usersReducers from '../Users/reducers';

export default function configureStore(history, initialState) {
  const reducers = {
    weatherForecasts: myReducers.reducer,
    tasksReducers: tasksReducers.reducer,
    profilePage: profileReducer.reducer,
      loginReducer: loginReducer.reducer
    taskProfilePage: myReducers.reducer,
    customerOfTask: taskCustomerReducer.reducer,
    usersReducers: usersReducers.reducer
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
