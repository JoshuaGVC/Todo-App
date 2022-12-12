import { FC } from "react"
import {ITitle} from "./Title.d"

const Title:FC<ITitle> = ({value}) => {
  return (
    <h1 className="todo__title">
      Todos (<span className="todo__count">{value}</span>)
    </h1>
  )
}

export default Title
