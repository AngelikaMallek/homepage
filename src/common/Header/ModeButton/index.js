import { Wrapper, Paragraph, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";

const ModeButton = () => {

    const theme = useSelector(selectIsDarkTheme);

    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Paragraph>Dark mode off</Paragraph>
            <Button onClick={() => dispatch(toggleTheme())}></Button>
        </Wrapper>
    )
}

export default ModeButton;