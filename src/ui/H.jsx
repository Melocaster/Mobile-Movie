import React from 'react'

export const H = ({ level, children, ...rest }) =>
    React.createElement(`h${Math.min(level, 6)}`, rest, children)
