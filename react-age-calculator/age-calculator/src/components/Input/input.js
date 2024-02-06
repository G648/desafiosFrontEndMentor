import styled from "styled-components";
import { APP_COLORS } from "../../utils/App_Colors/App_Colors";

export const Input = styled.input`
    width: 2.5em;
    border-radius: 8px;
    border: 1px solid ${APP_COLORS.line};
    outline: none;
    padding: .5em;
    font-family:'Poppins', sans-serif;
    font-size:3rem;
    font-weight:bold;
    color: ${APP_COLORS.black};
    gap: 15px;

    &::placeholder{
        font-size: 2.6rem;
    }
`

export const LabelText = styled.label`
    font-family:'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${APP_COLORS.grey};
    text-align:left;
    margin-bottom: 8px;
`

export const InputBoxFlex = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`

export function InputBox({
    textInput,
    placeholderInfo,
    inputValue,
    onChangeValue
}) {
    return (
        <>
            <InputBoxFlex>
                <LabelText>
                    {textInput}
                </LabelText>
                <Input
                    onChange={onChangeValue}
                    placeholder={placeholderInfo}
                    value={inputValue}
                />
            </InputBoxFlex>
        </>
    )
}