
const UserDatails = ({name, age, job}) => {
  return (
    <div>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profisão: {job}</li>
        </ul>
        {age >= 18 ? (<p>Pode tirar CNH</p>):(<p>Não pode tirar CNH</p>)}
    </div>
  )
}

export default UserDatails