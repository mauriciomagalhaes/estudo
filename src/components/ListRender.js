import {useState} from 'react'

function ListRender() {
  const [List] = useState(['Mauricio', 'Amanda', 'ALice']) 
  return (

    <ul>
        {List.map((item, key) => <li key={key}>{item}</li>)}
    </ul>

  )
}

export default ListRender