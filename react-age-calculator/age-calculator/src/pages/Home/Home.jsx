import React, { useState } from 'react';
import { Container, ContainerInputs } from '../../components/Container/Container';
import { InputBox } from '../../components/Input/input';
import { ButtonArrow } from '../../components/Button/Button';
import { TitleInfo } from '../../components/Title/Title';
import arrowImage from '../../assets/images/Frame 29.png'
import { APP_COLORS } from '../../utils/App_Colors/App_Colors';

const Home = () => {

    const date = new Date()
    const [idade, setIdade] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')

    function ageCalculate(anoPessoa) {
        const year = date.getFullYear() - 1;

        console.log(year);
        return year - anoPessoa;
    }

    function monthCalculate(anoPessoa, mesPessoa) {
        const birthDate = new Date(anoPessoa, mesPessoa - 1); // -1 porque os meses são indexados a partir de 0
        const today = new Date();
        let months = (today.getFullYear() - birthDate.getFullYear()) * 12;
        months -= birthDate.getMonth() + 1;
        months += today.getMonth();
        return months <= 0 ? 0 : months;
    }

    function dayCalculate(anoPessoa, mesPessoa, diaPessoa) {
        const birthDate = new Date(anoPessoa, mesPessoa - 1, diaPessoa); // -1 porque os meses são indexados a partir de 0
        const today = new Date();
        const diff = today.getTime() - birthDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }


    return (
        <Container>
            <ContainerInputs>
                <InputBox
                    inputValue={idade}
                    placeholderInfo={"DD"}
                    textInput={"Dia"}
                    onChangeValue={(event) => {
                        setIdade(event.target.value);
                    }}
                />


                <InputBox
                    inputValue={mes}
                    placeholderInfo={"MM"}
                    textInput={"Mês"}
                    onChangeValue={(event) => {
                        setMes(event.target.value);
                    }}
                />


                <InputBox
                    inputValue={ano}
                    placeholderInfo={"AAAA"}
                    textInput={"Ano"}
                    onChangeValue={(event) => {
                        setAno(event.target.value);
                    }}
                />

            </ContainerInputs>

            {/* Colocar a divisão aqui e o botão */}
            <ButtonArrow
                calculateDatas={() => alert("calculo")}
                backgroundColorImage={APP_COLORS.purple}
                image={arrowImage}
            />

            <TitleInfo
                birthdayData={ageCalculate(ano)}
                titleInput={"Anos"}
            />

            <TitleInfo
                birthdayData={monthCalculate(ano, mes)}
                titleInput={"Meses"}
            />

            <TitleInfo
                birthdayData={dayCalculate(ano, mes, idade)}
                titleInput={"Dias"}
            />
        </Container>
    );
};

export default Home;