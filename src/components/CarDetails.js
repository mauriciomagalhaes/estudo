

const CarDetails = ({brend, model, year, price, km}) => {

  return (
    <div>
        
        <h1>Detalhes do carro</h1>
        <ul>
            <li>Brend: {brend}</li>
            <li>Model: {model}</li>
            <li>Year: {year}</li>
            <li>Price: {price}</li>
            <li>Km: {km}</li>
        </ul>
        {km === 0 ? <h3>Carro novo</h3> : <h3>Carro Semi-novo</h3>}	

    </div>
  )
}

export default CarDetails