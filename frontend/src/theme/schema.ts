const COLOR_PALLET = {
    chineseSilver: '#ccc',
    primaryBlack: '#191a19',
    secondaryBlack: '#111',
    blackThree: 'rgb(42, 42, 42)',
    primaryBlue: '#00AFC1',
    secondaryBlue: '#0093AB',
};

const themeScheme = {
    light: {
        name: 'Light',
        palette: {},
    },
    dark: {
        name: 'Dark',
        palette: {
            body: COLOR_PALLET.primaryBlack,
            header: COLOR_PALLET.secondaryBlack,
            headerTitle: COLOR_PALLET.chineseSilver,
            headerTitleSpan: COLOR_PALLET.primaryBlue,
            headerTitleSpanHover: COLOR_PALLET.secondaryBlue,
            headerBottomBorder: COLOR_PALLET.blackThree,
            homeTitle: COLOR_PALLET.chineseSilver,
            homeSpan: COLOR_PALLET.primaryBlue,
            homeSpanHover: COLOR_PALLET.secondaryBlue,
        },
    },
};

export default themeScheme;
