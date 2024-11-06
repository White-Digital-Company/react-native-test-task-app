import React from 'react'
import RootRouter from './src/screens/RootRouter'
import { NavigationContainer } from '@react-navigation/native'
import { queryClient } from './src/api/utils/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Root = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor="transparent" translucent />
        <GestureHandlerRootView>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default App
