import styled from "styled-components";
import { APP_COLORS } from "../../utils/App_Colors/App_Colors";

export const Line = styled.div`
    border: 2px solid ${APP_COLORS.line};
    width: 80%;
    height: 0px;
`

export const ButtonStyle = styled.button`
    border-radius: 50%;
    outline:none;
    border:none;
    cursor: pointer;
`

export const ImageStyle = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`

export const DivStyle = styled.div`
    display:flex;
    align-items:center;
`

export function ButtonArrow({
    backgroundColorImage,
    image,
    calculateDatas
}) {
    return (
        <DivStyle>
            <Line />

            <ButtonStyle
                backgroudColor={backgroundColorImage}
                onClick={calculateDatas}
            >
                <ImageStyle
                    backgroudColor={backgroundColorImage}
                    src={image}
                />
            </ButtonStyle>
        </DivStyle>
    )
}