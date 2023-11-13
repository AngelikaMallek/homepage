import { StyledSection, Heading, Body, StyledList, ListItem, Span } from "./styled";
import { skills } from "../../skilset";
import ellipse from "./Ellipse.svg"

const Section = ({ title }) => (
    <StyledSection>
        <Heading>
            {title}
        </Heading>
        <Body>
            <StyledList>
                {skills.map((skill) => (
                    <ListItem key={skill}>
                        <img src={ellipse} alt="ellipse"></img>
                        <Span>{skill}</Span>
                    </ListItem>
                ))}
            </StyledList>
        </Body>
    </StyledSection>

);

export default Section;