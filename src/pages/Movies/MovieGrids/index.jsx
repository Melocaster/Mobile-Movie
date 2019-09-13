import React from 'react'
import { HeaderPanel } from '../../../ui/HeaderPanel'
import { Heading } from '../../../ui/Heading'
import { Card } from '../../../ui/Card'
import { LoadingScreen } from '../LoadingScreen'
import { colors } from '../../../styles/variables'
import { Grids, CardButton } from './styled'

export const MovieGrids = ({ films, showMovie }) => {
    return (
        <>
            <HeaderPanel>
                <Heading level={2} color={colors.white}>
                    Pop Movies
                </Heading>
            </HeaderPanel>
            {films && films.length > 0 ? (
                <Grids role="main">
                    {films.map(film => (
                        <CardButton
                            key={film.id}
                            onClick={() => showMovie(film.id)}
                        >
                            <Card
                                role="img"
                                aria-label={`${film.title} - Poster`}
                                img={film['poster_path']}
                            />
                        </CardButton>
                    ))}
                </Grids>
            ) : (
                <LoadingScreen />
            )}
        </>
    )
}
