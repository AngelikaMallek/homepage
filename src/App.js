import PersonalHomepage from "./features/PersonalHomepage";
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from './Theme/theme';
import { GlobalStyle } from './styled';
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/Header/ModeButton/themeSlice";

function App() {

  const isDarkMode = useSelector(selectIsDarkTheme)

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
