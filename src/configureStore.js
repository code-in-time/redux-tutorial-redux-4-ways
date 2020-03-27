import { createStore, compose, applyMiddleware } from 'redux';
import app from './reducers';
import thunk from 'redux-thunk';

export default function configureStore() {

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    app,
    {}, //initialState,
    // composeEnhancers(applyMiddleware(reduxPromise))
    composeEnhancers(applyMiddleware(thunk))
  );

  return store
}
