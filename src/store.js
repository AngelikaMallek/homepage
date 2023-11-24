import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './common/Header/ModeButton/themeSlice';
import portfolioReducer from "./features/PersonalHomepage/Portfolio/portfolioSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        theme: themeReducer,
        portfolio: portfolioReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

