import { StyledSection, Heading, Body, StyledList, ListItem, Span, Image } from "./styled";
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
                        <Image src={ellipse} alt="ellipse"></Image>
                        <Span>{skill}</Span>
                    </ListItem>
                )) : ""}
            </StyledList>
        </Body>
    </StyledSection>
);

export default Section;