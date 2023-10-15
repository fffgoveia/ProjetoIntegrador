import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Singin from '../pages/Singin'



export default  function Routes(){
  
  const Stack = createNativeStackNavigator();
  
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false}}
      />

    <Stack.Screen
      name="Singin"
      component={Singin}
      options={{ headerShown: false}}
      />


    </Stack.Navigator>
  )
}