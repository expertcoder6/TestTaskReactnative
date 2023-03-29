import React, {useRef} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
} from 'react-native-actions-sheet';
import { string } from '../constant';

function TestSheet(props: SheetProps<{data: string}>) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  return (
    <ActionSheet
      id={props.sheetId}
      ref={actionSheetRef}
      isModal={false}
      snapPoints={[100]}
      initialSnapIndex={0}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      useBottomSafeAreaPadding
      defaultOverlayOpacity={0.3}>
      <View
        style={styles.contain}>
        <View>
          <Text style={styles.textstyle}>
           {string.dummytext}
          </Text>
        </View>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  contain:{
    padding: 12,
    maxHeight: '100%',
    height: Dimensions.get('screen').height / 5,
  },
  textstyle: {
    fontWeight: '600',
    textTransform: 'capitalize',
    letterSpacing: 1.5,
    textShadowColor: 'grey',
  },
});

export default TestSheet;
