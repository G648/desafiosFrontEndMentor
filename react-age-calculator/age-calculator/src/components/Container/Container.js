import styled from 'styled-components'
import { APP_COLORS } from '../../utils/App_Colors/App_Colors'

export const Container = styled.div`
    height: 80vh;
    width: 60vw;
    margin: 0 auto;
    background-color: black;
    background-color: ${APP_COLORS.white};
    border-radius: 24px 24px 200px 24px; 
    
    box-shadow: 20px 10px 30px rgba(0,0,0, 0.600);

    margin-top: 2%;
    padding: 3%;
`

export const ContainerInputs = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 70%;
    gap: 15px;
`