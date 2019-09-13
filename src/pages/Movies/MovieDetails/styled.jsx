import styled from '@emotion/styled'
import { colors } from '../../../styles/variables'

export const TitleBar = styled.div`
    background-color: ${colors.primary.base};
    padding: 1.3125rem 1.5rem;
`

export const ContentContainer = styled.div`
    padding: 0 1.5rem;
`

export const DetailGrid = styled.div`
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: 1.5fr 1.5rem 2fr;
    grid-template-rows: auto;
`

export const OverviewContainer = styled.div`
    border-bottom: 1px solid ${colors.grey.light};
    padding-bottom: 1.5rem;
    & p {
        font-size: 0.75rem;
        color: ${colors.grey.base};
        letter-spacing: 0.0175rem;
    }
`
