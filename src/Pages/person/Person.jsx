import { useState } from "react"

const Person = () => {


    const data = [{ id: 1, name:"John", initialAge: 25 },
     { id: 2, name:"Mali", initialAge: 45 }, 
     { id: 3, name:"Joy", initialAge: 54 }]

    //  console.log(initialAge);

    //  const[action, setAction] = useState(data.initialAge)
     const age = data.map((item) => (item.initialAge))
     console.log(age);
     
     const increment = () =>{
        data.map((item) => (item.initialAge + 1))
      }
    const decrement = () =>{
    //   setAction();
         }
    return(

    <div>
    <table>
        <tbody>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>Age</th>
        <th>Action</th>
        </tr>
        {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.initialAge}</td>
                            <td>
                               
                                <button onClick={increment}>+</button>
                                <button>-</button>
                            </td>
                        </tr>
                    )
                })}
        </tbody>
  
    </table>

    </div>
    )
}


export default Person;