import React from 'react';
import {Image, StyleSheet, View,Animated} from 'react-native';


const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

export const ProgressiveImage = ({
  source,
  style,
  resizeMode,
  thumbnailSource,
}) => {
    imageAnimated = new Animated.Value(0);
    const onImageLoad = () => {
        Animated.timing(imageAnimated, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
    };
  return (
    <View style={styles.container}>
      <Animated.Image
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        resizeMode={resizeMode}
        onLoad={onImageLoad}
      />
    </View>
  );
};
