import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { RichTextEditor } from './src/components/RichTextEditor';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
        <View style={styles.container}>
          <RichTextEditor content="<p>Hello world!</p>" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
