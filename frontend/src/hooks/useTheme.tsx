import { useState } from 'react';

type useThemeType = () => [string, React.MouseEventHandler<HTMLHeadingElement>];

export const useTheme: useThemeType = () => {
    const [currentTheme, setCurrentTheme] = useState('dark');

    const toggleTheme: React.MouseEventHandler<HTMLHeadingElement> = () => {
        if (currentTheme === 'light') {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    };

    return [currentTheme, toggleTheme];
};
