import { call, takeEvery, select } from "redux-saga/effects";
import { selectIsDarkTheme } from "./themeSlice";
import { saveThemeToLocalStorage } from "./themeLocalStorage";

function* saveThemeToLocalStorageHandler() {
    const theme = yield select(selectIsDarkTheme);
    yield call(saveThemeToLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeToLocalStorageHandler);
}