import PortfolioItem from "./PortfolioItem";
import { PortfolioWrapper } from "./styled"
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
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

    if(repositoriesStatus === "loading") {
        return <Loading />
    } 

    if(repositoriesStatus === "error") {
        return <Error />
    }

    if(repositoriesStatus === "success") {
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
}

}

export default Portfolio;