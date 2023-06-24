import { useState } from "react";
import styled from 'styled-components'

export default function SwitchButtons(){
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <ContainerButtons>
      <Button
        isSelected={selectedButton === 1}
        onClick={() => handleButtonClick(1)}
        color="green"
      >
        Ativo
      </Button>
      <Button
        isSelected={selectedButton === 2}
        onClick={() => handleButtonClick(2)}
        color="red"
      >
        Inativo
      </Button>
    </ContainerButtons>
  );
}

const ContainerButtons = styled.div`
  width: 100px;
  height: 45px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 3px;
`;

const Button = styled.button`
  width: 50%;
  height: 90%;
  background-color: ${(props) => (props.isSelected ? props.color : "#7e7c7c")};
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-size: 10px;
`;