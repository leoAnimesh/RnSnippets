import {View, StyleSheet, NativeModules, StatusBar} from 'react-native';
import React from 'react';
const {StatusBarManager} = NativeModules;

interface SafeAreaViewProps {
  children: React.ReactNode;
}

const SafeAreaView: React.FC<SafeAreaViewProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBarManager.HEIGHT,
  },
});

export default SafeAreaView;
