import React from 'react'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import { MenuButton } from '../ui/MenuButton'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'
import { Loading } from '../ui/Loading'
import { colors } from '../styles/variables'

const BlackBackground = styled.div`
    background-color: black;
`

storiesOf('MenuButton', module).add('default', () => (
    <BlackBackground>
        <MenuButton />
    </BlackBackground>
))

storiesOf('Card', module).add('default', () => (
    <Card img="http://image.tmdb.org/t/p/w185/cCTJPelKGLhALq3r51A9uMonxKj.jpg" />
))

storiesOf('Heading', module)
    .add('h1', () => <Heading level={1}>Heading 1</Heading>)
    .add('h2', () => <Heading level={2}>Heading 2</Heading>)
    .add('primary color h3', () => (
        <Heading level={3} color={colors.primary.base}>
            Heading 3
        </Heading>
    ))

storiesOf('Loading', module).add('default', () => <Loading />)
