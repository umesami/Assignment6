import {useState} from 'react';


// const Valorant = () => {
//     fetch("https://valorant-api.com/v1/agents")
//     .then((res) => res.json())
//     .then((agentName) => {
//         console.log(agentName.data.displayName);
// })
// }
export default function Information(name){
    const [agentName, setAgentName] = useState([]);
    fetch("https://valorant-api.com/v1/agents")
    .then((res) => res.json())
    .then((agents) => {
        setAgentName(agents.data);
    })

    return(
        <div>
            <h1>Here are all the Valorant Agents currently released:</h1>
            {agentName.map((agent) => (
                <ul key={agent.uuid}>
                    <li>
                        Name: {agent.displayName}
                        <br />
                        Description: {agent.description}
                        <br />
                    </li>
                </ul>
            ))}
        </div>
    )

    // if(name == agentName){
    //     return(
    //         <div>
    //             <li>{agentName}</li>
    //             <li>{agentName.description}</li>
    //         </div>
    //     );
    // }

}
// export default function FindInfo(){
//     const[name, setName] = useState('');
//     const handleChange = (event) =>{
//         setName(event.target.value);
//     }
//     return(
//     <div>
//         <form>
//             <label htmlFor="name">Search for your Agent: (i.e Gekko, Fade, Sage)</label>
//             <input type="text" id="name" name="name" onChange={handleChange}></input>
//         </form>
//         <button type="button" onClick={(e) => Search(name)}>Submit</button>
//     </div>
//     )
// }
