import { useState } from "react"

const CondRender = () => {

    const [user] = useState({
        name: "Mauricio",
    })  

    const [adulto] = useState(true)

  return (
    <div>
        <p>{user.name === "Mauricio" ? ('Sim, é ele'):('Nao é ele')}</p>
        {adulto && <p>sim, ele é adulto'</p>} 
    </div>
  )
}

export default CondRender
