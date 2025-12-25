'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { system } from './system.chakra'
import { AbleProvider } from './context/context'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider value={system}>
      <AbleProvider>
        {children}
      </AbleProvider>
    </ChakraProvider>
  )
}
