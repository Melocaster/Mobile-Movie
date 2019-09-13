import styled from '@emotion/styled'

export const Spacing = styled.div`
    margin-top: ${props => props.top || props.y}rem;
    margin-bottom: ${props => props.bottom || props.y}rem;
    margin-left: ${props => props.left || props.x}rem;
    margin-right: ${props => props.right || props.x}rem;
`
