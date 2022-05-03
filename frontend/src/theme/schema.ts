const COLOR_PALLET = {
    chineseSilver: '#ccc',
    lightGray: '#777',
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
            scrollBar: COLOR_PALLET.secondaryBlue,
            scrollBarHover: COLOR_PALLET.primaryBlue,
            headerTitle: COLOR_PALLET.chineseSilver,
            headerTitleSpan: COLOR_PALLET.primaryBlue,
            headerTitleSpanHover: COLOR_PALLET.secondaryBlue,
            headerBottomBorder: COLOR_PALLET.blackThree,
            homeTitle: COLOR_PALLET.chineseSilver,
            homeSpan: COLOR_PALLET.primaryBlue,
            homeSpanHover: COLOR_PALLET.secondaryBlue,
            homeCardDesc: COLOR_PALLET.lightGray,
            form: COLOR_PALLET.secondaryBlack,
            inputText: COLOR_PALLET.chineseSilver,
            inputPlaceholder: COLOR_PALLET.lightGray,
        },
    },
};

export default themeScheme;
