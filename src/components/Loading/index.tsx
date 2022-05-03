import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = {
  color?: string;
  size?: number | 'small' | 'large' | undefined;
  containerStyle?: any;
};

const Loading: React.FC<Props> = ({ color, size, containerStyle }) => {
  const activityIndicatorStyle: StyleProp<ViewStyle> =
    Platform.OS === 'ios'
      ? {
          position: 'relative',
          left: 1,
          top: 1,
        }
      : {};
  return (
    <View
      style={{ ...styles.container, ...(containerStyle ? containerStyle : {}) }}
    >
      <ActivityIndicator
        style={activityIndicatorStyle}
        size={size ? size : 'small'}
        color={color ? color : 'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    minHeight: 50,
  },
});

export default Loading;
