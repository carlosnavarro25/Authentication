// index.android.js  -PONER TODO CODIGO PARA ANDROID!!!
/*import a library to help create a Component*/
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList.js';
// create a Component
const App = () => (
  <View style={{ flex: 1 }}>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);