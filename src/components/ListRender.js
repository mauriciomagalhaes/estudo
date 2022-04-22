import {useState} from 'react'

function ListRender() {
  const [user, setUser] = useState([
    {id:1, name: 'Mauricio', age: 44},
    {id:2, name: 'Amanda', age: 40},
    {id:3, name: 'Alice', age:5},
  
  ])
  
  const handleRemove = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    console.log(randomNumber)
    
    setUser((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  
  return (
    <>
    <ul>
       {user.map(user => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
       ))}
    </ul>
    <button onClick={handleRemove}>Delete</button>
    </>
  )
}

export default ListRender