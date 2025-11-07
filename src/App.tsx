import { Routes, Route } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import Navbar from './components/Navbar';
import { FullWidthSection } from './components/Layout';
import { useCurrentPageTitle } from './utils/hooks/useCurrentPageTitle';
import { appRoutes } from './routes/routes';
import { Suspense } from 'react';

const Root = styled(FullWidthSection).attrs({ as: 'main' })<{ $bg?: string }>`
  flex: 1;
  width: 100%;

  ${({ $bg }) => $bg && `background-color: ${$bg};`}
`;

export default function App() {
  const theme = useTheme();
  useCurrentPageTitle();

  return (
    <>
      <Navbar />

      <Root $bg={theme.colors.darkCharcoal}>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </Root>
    </>
  );
}
