import { Wrapper, StyledLoading, Paraghaph } from "./styled";

const Loading = () => (
    <Wrapper>
        <Paraghaph>Please wait, projects are being loaded...</Paraghaph>
        <StyledLoading />
    </Wrapper>
);

export default Loading;