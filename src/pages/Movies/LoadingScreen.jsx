import React from 'react'
import styled from '@emotion/styled'
import { Loading } from '../../ui/Loading'

const LoadingContainer = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingScreen = () => (
    <LoadingContainer>
        <Loading />
    </LoadingContainer>
)
