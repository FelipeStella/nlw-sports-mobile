import React from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';

import backgroungImage from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode;
}

export function Background ({ children } : Props) {
  return (
    <ImageBackground 
      source={ backgroungImage }
      defaultSource={ backgroungImage } 
      style={styles.container}>
        { children }
    </ImageBackground>
  );
}