import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Main from './pages/main/Main';
import Detail from './pages/detail/Detail';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
