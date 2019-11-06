import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Welcome from '../pages/welcome';

const Routes = () =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
      },
      {
        initialRouteName: 'Welcome',
      },

    ),
  );

export default Routes;
