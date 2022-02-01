import { Box, Flex, lightColors, Text } from 'larvas-ui'
import styled from 'styled-components'

export const StyledSquadHeaderContainer = styled(Flex)`
  position: relative;
  background: linear-gradient(180deg, #13111A 0%, #13111A 100%);
`

export const StyledSquadTitle = styled(Text)`
  font-size: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
  }
`

export const StyledSquadEventBorder = styled(Box)`
  background: linear-gradient(180deg, #13111A 0%, #13111A 100%);
  border-radius: 32px;
`

export const StyledSquadEventContainer = styled(Flex)`
  background: ${lightColors.text};
  background-clip: padding-box;
  border-radius: inherit;
`
