import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

//object configures
// what ever is at the top of the stack is the default page that shows up
//every screen will get the navigation property passed downs as props to the components
const screens = {
  Home: {
    screen: Home,
    // this is to give the header component access to navigation
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Gamez Zone" />
        ),
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

//object configures wwhich screens we want to configure for the navigator
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444", //color of header text
    headerStyle: { backgroundColor: "#eee", height: 90 },
  },
});

export default HomeStack;
