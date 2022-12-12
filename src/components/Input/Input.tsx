import { FC, FormEvent, useEffect, useState } from 'react'
import { IInput } from './Input.d'

const Inputs: FC<IInput> = ({ value, name, onChange }) => {
  const [inputValue, setInputValue] = useState(value)

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    setInputValue(value);
    onChange(value, name)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])


  return (
    <input
      name={name}
      className="todo__form__input"
      value={inputValue}
      onChange={handleOnChange}
    />
  )
}

export default Inputs
