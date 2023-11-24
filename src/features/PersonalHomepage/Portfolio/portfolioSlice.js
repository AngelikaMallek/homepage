import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repositories: null,
        status: "loading",
    },
    reducers: {
        fetchRepos: () => {},
        setRepos: (state, { payload: repositories }) => {
            state.repositories = repositories;
        },
        setStatus: (state, { payload: status }) => {
            state.status = status;
        },
    },
});

export const { setRepos, setStatus, fetchRepos } = portfolioSlice.actions;

export const selectPortfolioState = state => state.portfolio;

export const selectRepositories = (state) => selectPortfolioState(state).repositories;
export const selectRepositoriesStatus = (state) => state.portfolio ? state.portfolio.status : "loading";
  
export default portfolioSlice.reducer;