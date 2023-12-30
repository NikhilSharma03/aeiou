import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import GlobalStyle from './App.style';

import Layout from './components/Layout/layout';

import themeScheme from './theme/schema';

import { useAppDispatch, useTheme } from './hooks/hooks';

import { onConnectWallet } from './redux/actions/user';

import {
    Campaign,
    Campaigns,
    Home,
    NewCampaign,
    NewRequest,
} from './pages/pageSrc';

const App: React.FC = () => {
    const [currentTheme, toggleTheme] = useTheme();

    const getTheme = (selected: string) => {
        return selected === 'light' ? themeScheme.light : themeScheme.dark;
    };

    const dispatch = useAppDispatch();
    const connectWallet = () => dispatch(onConnectWallet());

    useEffect(() => {
        const userConnect = localStorage.getItem('user-address');
        if (userConnect) {
            connectWallet();
        }
    }, []);

    return (
        <ThemeProvider theme={getTheme(currentTheme)}>
            <GlobalStyle />
            <SnackbarProvider />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="campaigns" element={<Campaigns />} />
                    <Route path="campaigns/new" element={<NewCampaign />} />
                    <Route path="campaigns/:address" element={<Campaign />} />
                    <Route
                        path="requests/:address/new"
                        element={<NewRequest />}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
