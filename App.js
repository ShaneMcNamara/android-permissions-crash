import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Camera from './Camera';

const getPerms = async () => {
  try {
    await Permissions.askAsync(Permissions.LOCATION);
  } catch (err) {
    console.log('Failed to get Location Perms', err);
  }
};

export default function App() {
  const [showCamera,setShowCamera] = useState(false);
  useEffect(() => {
    getPerms();
  },[])
  return (
    <View style={styles.container}>
      {!showCamera && <Button
        title='Open Camera'
        onPress={() => setShowCamera(true)}
      />}
      <Camera visible={showCamera} onClose={() => setShowCamera(false)}/>
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
