import styled from "styled-components";
import { APP_COLORS } from "../../utils/App_Colors/App_Colors";


export const Title = styled.h1`
    font-weight: bolder;
    font-family:'Poppins', sans-serif;
    font-size: 8rem;
    color: ${APP_COLORS.black};
    font-style:italic;
    margin-top: 0px;
`

export const BirthdayInfo = styled.h1`
    font-weight: bolder;
    font-family:'Poppins', sans-serif;
    font-size: 10rem;
    color: ${APP_COLORS.purple};
    font-style:italic;
    margin-top: 0px;
`

export const InfoFlex = styled.div`
    display: flex;
    align-items:center;
    gap:15px;
    height: 25%;
`

export function TitleInfo({
    titleInput,
    birthdayData
}) {
    return (
        <InfoFlex>

            <BirthdayInfo>
                {birthdayData}

            </BirthdayInfo>
            <Title>
                {titleInput}
            </Title>

        </InfoFlex>
    )
}