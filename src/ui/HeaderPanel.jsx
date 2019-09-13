import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { Flex } from './Flex'
import { MenuButton } from './MenuButton'

const PanelBlock = styled.header`
    width: 100%;
    padding: 1rem 1.5rem;
    height: 4rem;
    background-color: ${colors.black};
`

export const HeaderPanel = ({ children }) => {
    return (
        <PanelBlock>
            <Flex justify="space-between">
                {children}
                <MenuButton onClick={() => {}} />
            </Flex>
        </PanelBlock>
    )
}
