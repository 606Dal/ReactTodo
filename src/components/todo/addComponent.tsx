import {ChangeEvent, useState} from "react";
import {postTodo} from "../../api/todoApi.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";
import useCustomResult from "../../hooks/useCustomResult.tsx";
import ResultModal from "../common/resultModal.tsx";

function AddComponent() {

    const [todoAdd, setTodoAdd] = useState<TodoAdd>({title:'', writer:''})

    const {moveToList, setLoading} = useCustomMove()

    const {result, msg, openModal, closeAction} = useCustomResult()

    const handleAddInputChange = (e:ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = e.target
        setTodoAdd(prevState => ({...prevState, [name]:value}))
    }

    const handleClick = () => {
        setLoading(true)

        postTodo(todoAdd).then(result => {
            openModal(`New Todo No.${result} Added`)
        })
    }

    const closeAll = () => {
        closeAction(()=> {
            moveToList()
        })
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <ResultModal show={result} closeResultModal={closeAll} msg={msg} />

            <div className="space-y-3">
                {/* 제목 input */}
                <div>
                    <label className="block text-gray-600 text-sm font-medium">Title</label>
                    <input type="text"
                           name='title'
                           value={todoAdd.title}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                           onChange={handleAddInputChange}
                    />
                </div>

                {/* 작성자 input */}
                <div>
                    <label className="block text-gray-600 text-sm font-medium">Writer</label>
                    <input type="text"
                           name='writer'
                           value={todoAdd.writer}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                           onChange={handleAddInputChange}
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-teal-400 text-white rounded"
                        onClick={handleClick}
                    >Add</button>
                </div>
            </div>

        </div>
    );
}

export default AddComponent;