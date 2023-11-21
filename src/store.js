import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './common/Header/ModeButton/themeSlice';

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
});
