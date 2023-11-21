const common = {
    breakpoints: {
        mobile: "767px",
        tablet: "991px",
    },
    
}

const colors = {
    colors: {
        alto: '#FBFBFE',
        mineShaft: '#252525',
        white: '#FFFFFF',
        littleGrey: 'rgba(209, 213, 218, 0.30)',
        scienceBlue: '#0366D6',
        black: '#000000',
        slateGray: '#6E7E91',
        iron: '#D1D5DA',
        semiDark: 'rgba(54, 54, 54, 0.72)',
    }
}

export const themeLight = {
    ...common,
    ...colors,
    background: colors.colors.alto,
    paragraph: colors.colors.slateGray,
    backgroundItem: colors.colors.white,
    sectionHeading: colors.colors.mineShaft,
    portfolioHeading: colors.colors.scienceBlue,
    icon: colors.colors.black,
    loader: colors.colors.iron,
}

export const themeDark = {
    ...common,
    ...colors,
    background: colors.colors.mineShaft,
    paragraph: colors.colors.white,
    backgroundItem: colors.colors.semiDark,
    sectionHeading: colors.colors.white,
    portfolioHeading: colors.colors.white,
    icon: colors.colors.white,
    loader: colors.colors.littleGrey,
}