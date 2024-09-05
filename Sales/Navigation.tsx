// NavigationContainer.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SellerSalesScreen from './screens/SellerSalesScreen.tsx';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="SellerSalesScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SellerSalesScreen" component={SellerSalesScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
