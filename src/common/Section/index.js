import { StyledSection, Heading, Body } from "./styled";

const Section = ({ title, body }) => (
    <StyledSection>
        <Heading>
            {title}
        </Heading>
        <Body>
            {body}
        </Body>
    </StyledSection>

);

export default Section;