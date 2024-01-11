import { NativeModules } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// const { StatusBarManager } = NativeModules;

export { wp, hp };


export const colorPalette = {
    primitive: {
        solids: {
            green: {
                100: '#dffee9',
                200: '#baedcb',
                300: '#6dda80',
                500: '#5abb6f',
                800: '#2d6338',
            },
            rust: {
                100: '#FFEBDB',
                200: '#F0CAAC',
                300: '#ec5d3c',
                500: '#ef8d44',
                800: '#883518',
            },
            blue: {
                100: '#c3e4fc',
                200: '#57BCF9',
                300: '#B2E3FC',
                500: '#9EC7D9',
                800: '#3b5bb9',
            },
            purple: {
                100: '#eccdfc',
                200: '#CE96CC',
                300: '#BC90DF',
                500: '#8C3CA9',
                800: '#963570',
            },
            bolt: {
                100: '#edf9bb',
                400: '#f4ff15',
                500: '#C0FF12',
            },
            neutrals: {
                100: '#fafafa',
                200: '#ddded8',
                500: '#3e3e41',
                800: '#221f20',
                900: '#0a0909',
            },
        },
        alpha: {
            black: {
                4: 'rgba(35, 31, 32, 0.0400)',
                8: 'rgba(35, 31, 32, 0.0800)',
                12: 'rgba(35, 31, 32, 0.1200)',
                14: 'rgba(35, 31, 32, 0.1400)',
                16: 'rgba(35, 31, 32, 0.1600)',
                30: 'rgba(35, 31, 32, 0.3000)',
                70: 'rgba(35, 31, 32, 0.7000)',
                100: '#231f20',
            },
            white: {
                4: 'rgba(255, 255, 255, 0.0400)',
                8: 'rgba(255, 255, 255, 0.0800)',
                12: 'rgba(255, 255, 255, 0.1200)',
                14: 'rgba(255, 255, 255, 0.1400)',
                16: 'rgba(255, 255, 255, 0.1600)',
                30: 'rgba(255, 255, 255, 0.3000)',
                70: 'rgba(255, 255, 255, 0.7000)',
                100: '#ffffff',
            },
        },
    },
};
