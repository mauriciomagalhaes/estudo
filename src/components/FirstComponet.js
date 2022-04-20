import Child from "./childComp";

const firstvar = 'Mauricio'

const first = () => {
    return <h1>
                Primeiro Componente de { firstvar }
                <Child/>
            </h1>;
}

export default first;