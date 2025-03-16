import Item from "./Item"

type DataProps = {
  data: Array<{id: number, text: string, tracked: boolean}>
  deleteTask: (id: number) => void
  updateTrackStatus: (id: number) => void
}

function List({data, deleteTask, updateTrackStatus}: DataProps){
    return (
        <div className="col-9 pt-3">
        <table className="table table-responsive table-striped">
            <thead>
                <tr>
                    <th className="fs-1">
                        Things To Do:
                    </th>
                </tr>
            </thead>
            <tbody>
                    {data.map(data => 
                    <tr key={data.id}>
                        <Item item={data} deleteTask={deleteTask} updateTrackStatus={updateTrackStatus}/>
                    </tr>)}
            </tbody>

        </table>
        </div>
    )
}

export default List