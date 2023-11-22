import PortfolioItem from "./PortfolioItem";
import { PortfolioWrapper } from "./styled"
import { useRepositories } from "./useRepositories";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const Portfolio = () => {

    const {repositories, loading, error} = useRepositories();

    if(loading) {
        return <Loading />
    }

    if(error) { 
        return <Error />
    }

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

export default Portfolio;