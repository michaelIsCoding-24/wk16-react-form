import { ChangeEvent, MouseEvent, useState } from "react"

type BarProps = {
    addTask: (task: string, tracking: boolean) => void
    taskText: string
    taskTracked: boolean
    setTaskText: (newText: string) => void
    setTaskTracked: (newValue: boolean) => void
}

function InputBar({addTask, setTaskText, setTaskTracked}: BarProps){
        
    const [taskTextValue, setTaskTextValue] = useState("")
    const [taskTrackedValue, setTaskTrackedValue] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTextValue(event.target.value)
    }

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const newText = taskTextValue
        const newTrack = taskTrackedValue
        setTaskText(newText)
        setTaskTracked(newTrack)
        
        addTask(newText, newTrack)

        setTaskTextValue("")
        setTaskTrackedValue(false)    
    }
    
    
    return (
        <form className="col-auto"> 
            <input className="mx-1" id="task-input" type="text" placeholder="Enter Task..."
            onChange={handleChange}
            value={taskTextValue}
            ></input>
            <label>
                Track Task?<input className="mx-1" id="tracked-select-on-input" 
                checked={taskTrackedValue} type="checkbox" 
                onChange={(event) => setTaskTrackedValue(event.target.checked)}/>
            </label>
            <button className="btn btn-primary mx-1" onClick={handleSubmit}>Add Entry</button>
        </form>
    )
}

export default InputBar