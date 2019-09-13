import styled from '@emotion/styled'
import { H } from './H'

const levelMap = {
    1: {
        fontSize: '2rem',
    },
    2: {
        fontSize: '1.5rem',
    },
    3: {
        fontSize: '1.125rem',
    },
}

export const Heading = styled(H)(props => ({
    ...levelMap[props.level],
    color: props.color ? props.color : '#000000',
    fontWeight: props.fontWeight ? props.fontWeight : 'normal',
    fontStyle: props.fontStyle ? props.fontStyle : 'normal',
    margin: 0,
}))
