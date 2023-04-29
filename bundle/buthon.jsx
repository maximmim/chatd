import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ onPress, title, colors }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={{
          position:"absolute",
          bottom:0,
          left:305,
          height: 50,
          width: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;