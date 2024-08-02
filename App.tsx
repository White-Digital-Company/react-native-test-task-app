import { NavigationContainer } from '@react-navigation/native'
import RootRouter from './src/screens/RootRouter'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <GestureHandlerRootView>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
