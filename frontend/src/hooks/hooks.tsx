import { useState } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './../redux/store/store';

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

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
