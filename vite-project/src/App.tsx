import { ChangeEvent, useState } from 'react'
import './App.css'
import { Button, Input } from '@chakra-ui/react';

function App() {
  {/*const [text, setText] = useState<string>("");

  const onChangeText = (e:ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value);
  }*/}

  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (e.target.name === 'input1') {
      setInput1(value);
      setSum(value + input2);
    }
    if (e.target.name === 'input2') {
      setInput2(value);
      setSum(input1 + value);
    }
  }

  return (
    <>
      {/*<Input type="text" onChange={onChangeText} placeholder='Введите значение'/>
      <div>
        <span>{text}</span>
      </div>
  <Button colorScheme='blue'>Текст</Button>*/}

      <div>
      <Input type="number" name="input1" placeholder='Введите число' onChange={handleInputChange} />
      <Input type="number" name="input2" placeholder='Введите число' onChange={handleInputChange} />
      <p>Результат сложения: {sum}</p>
    </div>
    </>
  )
}

export default App
