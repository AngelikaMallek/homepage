import {all} from "redux-saga/effects";
import { portfolioSaga } from "./features/PersonalHomepage/Portfolio/portfolioSaga";
import { themeSaga } from "./common/Header/ModeButton/themeSaga";

export default function* rootSaga() {
    yield all([
        portfolioSaga(),
        themeSaga()
    ]);
}