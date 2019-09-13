import React from 'react'
import { HeaderPanel } from '../../../ui/HeaderPanel'
import { Heading } from '../../../ui/Heading'
import { Flex } from '../../../ui/Flex'
import { BackButton } from '../../../ui/BackButton'
import { Card } from '../../../ui/Card'
import { Button } from '../../../ui/Button'
import { Spacing } from '../../../ui/Spacing'
import { colors } from '../../../styles/variables'
import { LoadingScreen } from '../LoadingScreen'
import {
    TitleBar,
    DetailGrid,
    ContentContainer,
    OverviewContainer,
} from './styled'
import { useMovieDetails } from './useMovieDetails'

export const MovieDetails = ({ id, onBack }) => {
    const details = useMovieDetails(id)

    const renderDetails = () => (
        <main>
            <TitleBar>
                <Heading level={1} fontWeight={300} color={colors.white}>
                    {details.title}
                </Heading>
            </TitleBar>
            <ContentContainer>
                <DetailGrid>
                    <Card
                        role="img"
                        img={details['poster_path']}
                        aria-label={`${details.title} - Poster`}
                    />
                    <div></div>
                    <div>
                        <Heading
                            level={2}
                            color={colors.grey.base}
                            fontWeight={300}
                        >
                            {details['release_year']}
                        </Heading>
                        <Spacing top={0.25} />
                        <Heading
                            level={2}
                            color={colors.grey.base}
                            fontStyle="oblique"
                        >{`${details.runtime} min`}</Heading>
                        <Spacing top={1} />
                        <Heading level={3}>{`${
                            details['vote_average']
                            }/10`}</Heading>
                        <Spacing top={1} />
                        <Button>MARK AS FAVORITE</Button>
                    </div>
                </DetailGrid>
                <OverviewContainer>
                    <p>{details.overview}</p>
                </OverviewContainer>
                <div>
                    <Spacing top={0.5} />
                    <Heading level={3} color={colors.grey.base}>
                        Trailers
                    </Heading>
                </div>
            </ContentContainer>
        </main>
    )

    return (
        <>
            <HeaderPanel>
                <Flex align="center">
                    <BackButton onClick={onBack} />
                    <Heading level={2} color={colors.white}>
                        Movie Detail
                    </Heading>
                </Flex>
            </HeaderPanel>
            {details ? renderDetails() : <LoadingScreen />}
        </>
    )
}
