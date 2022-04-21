import Child from "./childComp";

import img from "../assets/pic2.jpg";

import styles from "./FirstComponet.css";
const firstvar = 'Mauricio'


const first = () => {
    return <h1>
                Primeiro Componente de { firstvar }
                <Child/>
                <img className={styles.img} src="pic1.jpg" alt="public" />
                <img src={img} alt="asset" />
            </h1>;
}

export default first;