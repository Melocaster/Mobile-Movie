import styled from '@emotion/styled'

export const Card = styled.div`
    width: 100%;
    padding-bottom: 148%;
    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat;
`
