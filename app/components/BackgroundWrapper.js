import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const BackgroundWrapper = ({ children }) => {
  return (
    <ImageBackground source={require('../../assets/imagemfundo.png')} style={styles.background}>
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
  },
});

export default BackgroundWrapper;
