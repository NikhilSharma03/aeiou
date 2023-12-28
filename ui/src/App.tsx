import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/layout';
import { ThemeProvider } from 'styled-components';
import themeScheme from './theme/schema';
import GlobalStyle from './App.style';
import { useTheme } from './hooks/hooks';

// Pages
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

    return (
        <ThemeProvider theme={getTheme(currentTheme)}>
            <GlobalStyle />
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
