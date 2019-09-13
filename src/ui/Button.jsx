import styled from '@emotion/styled'
import { colors } from '../styles/variables'

export const Button = styled.button`
    border: 1px solid ${colors.primary.light};
    background-color: ${colors.primary.lighter};
    padding: 0.5625rem 1.5625rem;
    font-size: 0.75rem;
    color: ${colors.grey.base};
    max-width: 7rem;
`
