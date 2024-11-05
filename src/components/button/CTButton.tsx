import React, { ReactNode } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import tw from '../../../tw'

interface ICTButtonProps {
  text?: string
  onClick: () => void
  children?: ReactNode
  propStyles?: string
  loading?: boolean
}
export const CTButton = ({
  text,
  onClick,
  children,
  propStyles = 'bg-black',
  loading,
}: ICTButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        tw`${propStyles} ${
          loading ? 'opacity-50' : ''
        } h-14 py-4 items-center justify-center rounded-full`,
      ]}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" />
      ) : text ? (
        <Text style={[tw`text-white text-base`]}>{text}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
