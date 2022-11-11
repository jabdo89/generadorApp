import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from '@screens/home';
import Displays from '@screens/displays';
import Overview from '@screens/resumen';
import Comments from '@screens/comments';
import Agenda from '@screens/agenda';

const { Navigator: BottomNavigator, Screen: BottomScreen } = createBottomTabNavigator();

const BottomBar = ({ navigation, state }) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      style={{
        paddingBottom: bottom,
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
      }}
    >
      <BottomNavigationTab title="Stores" icon={(props) => <Icon {...props} name="home" />} />
      <BottomNavigationTab title="Overview" icon={(props) => <Icon {...props} name="activity" />} />
      <BottomNavigationTab
        title="Displays"
        icon={(props) => <Icon {...props} name="arrowhead-up" />}
      />
      <BottomNavigationTab
        title="Comments"
        icon={(props) => <Icon {...props} name="clipboard" />}
      />
      <BottomNavigationTab title="Agenda" icon={(props) => <Icon {...props} name="calendar" />} />
    </BottomNavigation>
  );
};

const Main = () => {
  return (
    <BottomNavigator tabBar={(props) => <BottomBar {...props} />}>
      <BottomScreen name="Home" component={Home} />
      <BottomScreen name="Overview" component={Overview} />
      <BottomScreen name="Displays" component={Displays} />
      <BottomScreen name="Comments" component={Comments} />
      <BottomScreen name="Summary" component={Agenda} />
    </BottomNavigator>
  );
};

BottomBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

export default Main;
