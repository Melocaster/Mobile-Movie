import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Loading = styled.div`
    border: 1rem solid ${colors.grey.ligher};
    border-top: 1rem solid ${colors.primary.base};
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    animation: ${spin} 2s linear infinite;
`
