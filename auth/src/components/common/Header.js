// IMPORT LIBRARIES FOR MAKING A Component
import React from 'react';
import { Text, View } from 'react-native';


// MAKE A Component
const Header = (props) => {
const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
  <Text style={textStyle}>{ props.headerText}</Text>
  </View>
);
};


const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    //shadowColor: '#000',     PARA IOS
    //shadowOffset: { width: 0, height: 10 },   PARA IOS
  //  shadowOpacity: 1.9,                      PARA IOS
    elevation: 7,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20

  }
};

// MAKE THE COMPONENT AVAILABLE TO OTHER PARTS OF THE APP
export { Header };
