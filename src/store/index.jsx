import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
// import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
let composeEnhancers = compose;

//if (process.env.NODE_ENV === 'development') {
composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: ['REDUX_STORAGE_SAVE'],
        trace: true,
        traceLimit: 20,
      })
    : compose;
//};

const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(...middlewares)));
// sagas(sagaMiddleware);
export { store };
