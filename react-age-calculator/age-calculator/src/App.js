import logo from './logo.svg';
import './App.css';
import { Container, ContainerInputs } from './components/Container/Container';
import { InputBox } from './components/Input/input';


function App() {
  return (
    <div className='App'>

      <Container>
        <ContainerInputs>
          <InputBox
            textInput={"Dia"}
          />


          <InputBox
            textInput={"Mês"}
          />


          <InputBox
            textInput={"Ano"}
          />

        </ContainerInputs>
      </Container>

    </div>
  );
}

export default App;
