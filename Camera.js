import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text,View } from 'react-native';
import { Camera } from 'expo-camera';

export default ({ visible, onClose }) => {
  const [hasPerms,setHasPerms] = useState(false);
  useEffect(() => {
    const init = async () => {
      try {
        const { status:cameraPerms } = await Camera.requestPermissionsAsync();
        setHasPerms(cameraPerms === 'granted')
      } catch(err) {
        console.log('Failed to get Camera Perms', err);
      } 
    };
    init();
  },[]);
  const hideButton = (
    <Button
      title='Hide Camera'
      onPress={onClose} 
    />
  );
  if(!visible) return null;
  return (
    hasPerms ? <Camera style={StyleSheet.absoluteFill}>
      {hideButton}
    </Camera> : (
      <View style={[StyleSheet.absoluteFill,{ justifyContent:'center', flexDirection:'row'}]}>
        <View style={{ justifyContent:'center'}}>
          <Text style={{ width: '100%', marginBottom: 10 }}>Access to camera is denied</Text>
          <View style={{ width:'100%', height: 40,}}>
            {hideButton}
          </View>

        </View>
      </View>
    )
  );
}
