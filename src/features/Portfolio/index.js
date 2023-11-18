import PortfolioItem from "./PortfolioItem";
import icon from "./icon.svg";
import { Wrapper, Image, Title, Paragraph, PortfolioWrapper } from "./styled"
import { useRepositories } from "./useRepositories";
import Loading from "./Loading";

const Portfolio = () => {

    const {repositories, loading, error} = useRepositories();

    return (
        <>
            <Wrapper>
                <Image src={icon} alt="Icon"></Image>
                <Title>Portfolio</Title>
                <Paragraph>My recent projects</Paragraph>
            </Wrapper>
            <PortfolioWrapper>
                {loading ?
                    <Loading />
                : repositories ? repositories.map((repository) => (
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
}

export default Portfolio;