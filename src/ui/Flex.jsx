import styled from '@emotion/styled'

export const Flex = styled.div(props => ({
    display: 'flex',
    flexDirection: props.direction ? props.direction : 'row',
    justifyContent: props.justify ? props.justify : 'flex-start',
    alignItems: props.align ? props.align : 'stretch',
}))
