import { Outlet } from 'react-router-dom';

import { Header } from '@container';

import { BodyContainer, Root } from './Main.styles';

export const MainLayout = () => (
    <Root>
        <Header />

        <BodyContainer>
            <Outlet />
        </BodyContainer>
    </Root>
);
