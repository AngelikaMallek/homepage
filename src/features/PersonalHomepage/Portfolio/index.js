import PortfolioItem from "./PortfolioItem";
import { PortfolioWrapper } from "./styled"
import Loading from "./Loading";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectRepositories, selectRepositoriesStatus } from "./portfolioSlice";
import { useEffect } from "react";

const Portfolio = () => {

    const dispatch = useDispatch()

    const repositories = useSelector(selectRepositories);
    const repositoriesStatus = useSelector(selectRepositoriesStatus);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    switch(repositoriesStatus) {
        case "loading" :
            return <Loading />
        case "error" :
            return <Error />
        case "success" : 
            try {
                return (
                    <>
                        <PortfolioWrapper>
                            {repositories ? repositories.map((repository) => (
                                <PortfolioItem 
                                    key={repository.id}
                                    title={repository.name}
                                    description={repository.description}
                                    linkDemo={repository.homepage}
                                    linkRepo={repository.html_url}
                                />
                            )) : ""}
                        </PortfolioWrapper>
                    </>
                );
            } catch {
                return "";
            }
        default:
            return null;
    }
}

export default Portfolio;