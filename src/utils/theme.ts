import { NativeModules } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { StatusBarManager } = NativeModules;

export const theme = {
    wp,
    hp,
    statusBarHeight: StatusBarManager.HEIGHT,
}