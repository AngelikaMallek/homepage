import { StyledSection, Heading, Body, StyledList, ListItem, Span, Image } from "./styled";

const Section = ({ title, body }) => (
    <StyledSection>
        <Heading>
            {title}
        </Heading>
        <Body>
            <StyledList>
                {body ? body.map((skill) => (
                    <ListItem key={skill}>
                        <Image />
                        <Span>{skill}</Span>
                    </ListItem>
                )) : ""}
            </StyledList>
        </Body>
    </StyledSection>
);

export default Section;