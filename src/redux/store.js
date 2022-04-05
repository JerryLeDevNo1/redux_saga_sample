import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducers";
import rootSagas from "./sagas";

const composeEnhancers = 
    process.env.NODE_ENV !== "production" &&
    typeof window === "object"
        ? composeWithDevTools({realtime: true})
        : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const enhancers = [applyMiddleware(sagaMiddleware)];
    const store = createStore(rootReducers, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSagas);
    return store;
};

export default configureStore;