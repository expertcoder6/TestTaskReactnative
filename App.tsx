

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {registerSheet, SheetProvider} from 'react-native-actions-sheet';
import SheetScreen from './src/component/SheetScreen';
import TestSheet from './src/component/Testsheet';

function App(): JSX.Element {
  registerSheet('TestSheet', TestSheet);

  return (
    <SheetProvider context="global">
      <SafeAreaView style={styles.container}>
        <SheetScreen />
      </SafeAreaView>
    </SheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});

export default App;
