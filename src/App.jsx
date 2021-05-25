import * as S from './styles/AppStyle'
import Routes from './config/routes'
import { ThemeProvider  } from 'styled-components'
import lightTheme from './themes/light'


 function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <S.Container >
        <Routes/>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
