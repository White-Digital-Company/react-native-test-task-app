import RootRouter from '@/screens/RootRouter'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./global.css"

const queryClient = new QueryClient();

const Root = () => {
  return <RootRouter />
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </QueryClientProvider>
        </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
