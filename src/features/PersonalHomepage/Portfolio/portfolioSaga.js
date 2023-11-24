import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchRepos, setRepos, setStatus } from "./portfolioSlice";
import { getPortfolio } from "./getPortfolio"

function* fetchRepositoriesHandler() {
    try {
        yield delay(2000);
        const portfolio = yield call(getPortfolio);
        yield put(setRepos(portfolio));
        yield put(setStatus("success"));
    } catch (error) {
        yield put(setStatus("error"));
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchRepos.type, fetchRepositoriesHandler);
}