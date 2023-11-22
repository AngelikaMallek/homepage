import { Wrapper, Paragraph, Button, IconWrapper, Icon } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";

const ModeButton = () => {

    const isDarkMode = useSelector(selectIsDarkTheme);

    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Paragraph>Dark mode {isDarkMode ? "on" : "off"}</Paragraph>
            <Button onClick={() => dispatch(toggleTheme())}>
            <IconWrapper moveToRight={isDarkMode}>
                <Icon />
            </IconWrapper>
            </Button>
        </Wrapper>
    )
}

export default ModeButton;