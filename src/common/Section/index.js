import { StyledSection, Heading, Body, StyledList, ListItem, Span } from "./styled";
import ellipse from "./Ellipse.svg"

const Section = ({ title, body }) => (
    <StyledSection>
        <Heading>
            {title}
        </Heading>
        <Body>
            <StyledList>
                {body ? body.map((skill) => (
                    <ListItem key={skill}>
                        <img src={ellipse} alt="ellipse"></img>
                        <Span>{skill}</Span>
                    </ListItem>
                )) : ""}
            </StyledList>
        </Body>
    </StyledSection>
);

export default Section;