import {useState} from 'react';

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
                <table className='td' key={agent.uuid}>
                    <tbody>
                        <td className='td'>{agent.displayName}</td>
                        <td className='td'>Description: {agent.description}</td>
                    </tbody>
                </table>
            ))}
        </div>
    )
}

