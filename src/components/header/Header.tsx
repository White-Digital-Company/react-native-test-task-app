import React from 'react'
import { Text } from 'react-native'
import tw from '../../../tw'

interface IHeaderProps {
  title: string
}

export const Header = ({ title }: IHeaderProps) => {
  return <Text style={tw`text-center text-base py-4 font-abel`}>{title}</Text>
}
