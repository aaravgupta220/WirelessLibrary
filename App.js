import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { render } from 'react-dom';

export default class App extends React.Component {
 render(){
   return(
     <AppContainer/>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: BookTransactionScreen},
  Search: {screen: SearchScreen}
});

defaultNavigationOptions: ({navigation}) => ({
  tabBarIcon: () => {
    const routeName = navigation.state.routeName
    if(routeName === 'Transaction'){
      return(
        <Image
          source={require("./assets/book.png")}
          style={{
            width: 30,
            height: 30
          }}
        />
      )
    }else if(routeName === 'Search'){
      return(
        <Image
          source={require("./assets/searchingbook.png")}
          style={{
            width: 30,
            height: 30
          }}
        />
      )
    }
  }
})

const AppContainer = createAppContainer(Tabnavigator);