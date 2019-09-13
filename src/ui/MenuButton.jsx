import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as MenuIcon } from '../icons/menu.svg'

export const TransButton = styled.button`
    border: none;
    background: transparent;
    text-decoration: none;
    max-width: 2.5rem;
    max-height: 100%;
    &: hover {
        cursor: pointer;
    }
`

export const MenuButton = ({ onClick }) => (
    <TransButton onClick={onClick}>
        <MenuIcon />
    </TransButton>
)
