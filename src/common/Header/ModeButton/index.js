import { Wrapper, Paragraph, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";

const ModeButton = () => {

    const isDarkMode = useSelector(selectIsDarkTheme);

    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Paragraph>Dark mode {isDarkMode ? "on" : "off"}</Paragraph>
            <Button onClick={() => dispatch(toggleTheme())}></Button>
        </Wrapper>
    )
}

export default ModeButton;