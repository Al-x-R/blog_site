import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { data } from './_data'
import { StatCard } from './StatCard'

export const StatWithCenteredIndicator = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          {data.map((stat, idx) => (
            <StatCard key={idx} data={stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
