import React from 'react'
import {
  CheckIcon,
  Cross2Icon,
  ExclamationTriangleIcon,
  FontStyleIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  TextNoneIcon,
} from '@radix-ui/react-icons'
import { Box } from './Box'
import { Text } from './Text'
import { useStore } from '../lib/store'
import { TooltipWrapper } from './Tooltip'
import { BarGraph } from './BarGraph'
import { fontWeights } from '../data/fontWeights'

const Key = ({
  icon = <LetterCaseCapitalizeIcon />,
  label = 'Preferred',
  color = '$green300',
}) => (
  <Box
    direction="horizontal"
    columns="auto-free"
    alignItems="center"
    justifySelf="center"
    gap="x-tight"
  >
    <Box
      alignItems="center"
      justifyItems="center"
      css={{
        backgroundColor: color,
        border: '1px solid $gray900',
        height: '$3',
        width: '$3',
      }}
    >
      {React.cloneElement(icon)}
    </Box>
    <Text size="1" weight="medium">
      {label}
    </Text>
  </Box>
)

function Scale() {
  const contrast = useStore(state => state.contrast)
  return (
    <Box
      css={{ pt: '$4', px: '$4', pb: '$2', userSelect: 'none', height: '100%' }}
    >
      <Box gap="tight" alignContent="start">
        <Box css={{ paddingLeft: '$1' }} columns="auto-free" gap="loose">
          <FontStyleIcon />
          <Box direction="horizontal" columns="auto-free">
            <Text size="1" light weight="bold">
              12px
            </Text>
            <Text size="1" light css={{ justifySelf: 'end' }} weight="bold">
              96px
            </Text>
          </Box>
        </Box>
        {fontWeights.map(({ weight, fontClass, tooltip }, i) => (
          <Box alignItems="center" key={i} columns="auto-free" gap="loose">
            <TooltipWrapper content={tooltip}>
              <Text weight={fontClass}>{weight}</Text>
            </TooltipWrapper>
            <BarGraph weight={weight} contrast={contrast} />
          </Box>
        ))}
      </Box>
      <Box
        alignSelf="end"
        direction="horizontal"
        css={{ gridTemplateColumns: 'auto 1fr auto' }}
      >
        <Key label="Fluently readable " />
        <Key color="$yellow300" label="Spot readable " icon={<HeadingIcon />} />
        <Key color="$red400" label="Not suitable" icon={<TextNoneIcon />} />
      </Box>
    </Box>
  )
}

export default Scale
