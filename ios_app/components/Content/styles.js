import React, {Component} from 'react';

import {Dimensions, StyleSheet} from 'react-native';

const sHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: sHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 100,
    color: 'red',
  },
});
export default styles;
