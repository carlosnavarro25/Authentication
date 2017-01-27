import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
 state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDO5-GAgV18e32H3uoYSM7LFA5ky6NUv7A',
    authDomain: 'authentication-476bf.firebaseapp.com',
    databaseURL: 'https://authentication-476bf.firebaseio.com',
    storageBucket: 'authentication-476bf.appspot.com',
    messagingSenderId: '614212258614'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState ({ loggedIn: true });
    } else {
      this.setState ({ loggedIn: false });
    }
  });
  }

  renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
              <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                  Log Out
                </Button>
              </CardSection>
          );
        case false:
          return <LoginForm />;
        default:
        return(
      <View style={styles.SpinnerWithDirection}>
        <Spinner />
      </View>
    );
      }

}


  render(){
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;

const styles = {
  SpinnerWithDirection: {
    flexDirection: 'row'
  }
};
