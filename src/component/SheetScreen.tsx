import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SheetManager} from 'react-native-actions-sheet';
import TestSheet from './Testsheet';
import {string} from '../constant';

const SheetScreen = () => {
  return (
    <>
      <TouchableOpacity
        onPress={() => SheetManager.show('TestSheet')}
        style={styles.btnstyle}>
        <Text style={styles.btntext}>{string.btntext}</Text>
      </TouchableOpacity>
      <TestSheet sheetId="testsheet" />
    </>
  );
};

export default SheetScreen;

const styles = StyleSheet.create({
  btnstyle: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  btntext: {
    color: 'black',
    fontWeight: 'bold',
  },
});
