
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
    return (
        <div>
              {clicou(true)}
              <button onClick={ handleClick } type="submit">Botão</button>
        </div>
    )
}
export default FormButton;