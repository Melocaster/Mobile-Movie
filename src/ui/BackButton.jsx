import React from 'react'
import { TransButton } from './MenuButton'
import { ReactComponent as LeftArrow } from '../icons/left-arrow.svg'

export const BackButton = ({ onClick }) => (
    <TransButton onClick={onClick}>
        <LeftArrow />
    </TransButton>
)
