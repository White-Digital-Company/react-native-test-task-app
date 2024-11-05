import React from 'react'
import { Text } from 'react-native'
import tw from '../../../tw'
import { customFonts } from '../../../src/styles/customStyles'

interface IHeaderProps {
  title: string
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <Text style={[tw`text-center text-base py-4`, customFonts.abel]}>
      {title}
    </Text>
  )
}
