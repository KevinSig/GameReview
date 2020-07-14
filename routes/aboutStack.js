import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

//object configures

// what ever is at the top of the stack is the default page that shows up
//every screen will get the navigation property passed downs as props to the components
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Aboot Gamez Zone" />
        ),
      };
    },
  },
};

//object configures wwhich screens we want to configure for the navigator
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444", //color of header text
    headerStyle: { backgroundColor: "#eee", height: 90 },
  },
});

export default AboutStack; 
