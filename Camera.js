import { useEffect } from 'react';
import { Camera } from 'expo-camera';

export default () => {
  useEffect(() => {
    Camera.requestPermissionsAsync();
  },[]);
  return null;
}
