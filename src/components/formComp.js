import { useState } from "react"

const handleClick = (e) => {
    return (
        console.log('clicou')
        )
    }

    const clicou = (x) => {
        if(x) {
            return <h1>Clicou</h1>
        } else {
        return <h1>Ainda Não clicou</h1>
    }
}

const FormButton = () => {
    
    const [number, setNumber] = useState(0);
    
    return (
        <div>
              {clicou(true)}
              {clicou(false)}
              <p>Numero: { number }</p>
              <button onClick={ handleClick } type="submit">Botão</button>
              <button onClick={ () => setNumber(number + 1) } type="submit">Soma</button>              
        </div>
    )
}
export default FormButton;