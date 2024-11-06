import React, { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { tw } from '@tools/tw'

interface ICTButtonProps {
  text?: string
  onPress: () => void
  children?: ReactNode
  propStyles?: string
  loading?: boolean
}
export const CTButton = ({
  text,
  onPress,
  children,
  propStyles = 'bg-black',
  loading,
}: ICTButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw.style(
        propStyles,
        loading ? 'opacity-50' : '',
        'h-14 py-4 items-center justify-center rounded-full',
      )}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" />
      ) : text ? (
        <Text style={tw`text-white text-base`}>{text}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
