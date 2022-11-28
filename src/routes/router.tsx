import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Context from '../context';
import { googleApi } from '../constants';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Context.Provider value={googleApi}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

export default Router;