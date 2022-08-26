import { useEffect } from "react"

export default function TodoList({ tasklist, setTaskList }) {
    //call api and use setTasklist to fill in state..
    useEffect (() => {

    fetch("https://three-do-api-ap.web.app/tasks")
        .then(results => results.json())
        .then(setTaskList) 
        .catch(console.error)
        }, [setTaskList])
    
    if (!tasklist) {
        return <h2>No tasks to complete</h2>
    }
    return (
        <ul>
            {tasklist.map( task => (
                <li key={task.id}>{task.task}</li>
            ))}
        </ul>

    )
}

