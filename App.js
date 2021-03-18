import React, { useEffect } from 'react';
import { StyleSheet, View} from 'react-native';;
import * as Permissions from 'expo-permissions';

import Camera from './Camera';

export default function App() {
  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION);
  },[])
  return (
    <View style={styles.container}>
      <Camera/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
