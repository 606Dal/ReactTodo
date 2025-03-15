import LoadingComponent from "../common/loadingComponent.tsx";
import useCustomResult from "../../hooks/useCustomResult.tsx";
import {ChangeEvent} from "react";
import {deleteTodo, updateTodo} from "../../api/todoApi.tsx";
import ResultModal from "../common/resultModal.tsx";
import useCustomRead from "../../hooks/useCustomRead.tsx";

function ModifyComponent() {

    const {todo, loading, moveReadOrModify, moveToList, setTodo} = useCustomRead()

    const {result, msg, openModal, closeAction} = useCustomResult()

    const handleTitleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        const value = e.target.value
        setTodo(prevState => ({...prevState, title:value}))
    }

    const clickDeleteBtn = () => {
        deleteTodo(todo.tno).then(() => {
            openModal(`Delete Todo No.${todo.tno}`)
        })
    }

    const clickModifyBtn = () => {
        updateTodo(todo.tno, todo.title).then(() => {
            openModal(`Update Todo No.${todo.tno}`)
        })
    }

    const closeAll = () => {
        closeAction(() => {
            if(msg.startsWith('Delete')) {
                moveToList()
            }else if(msg.startsWith('Update')) {
                moveReadOrModify(todo.tno)
            }
        })
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <LoadingComponent isLoading={loading} />

            <ResultModal
                show={ result }
                msg={ msg }
                closeResultModal={closeAll}
            ></ResultModal>

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text" readOnly value={todo.tno}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text" value={todo.title}
                           className="w-full p-2 border-2 border-emerald-200 rounded bg-gray-100 text-gray-700"
                           onChange={handleTitleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text" readOnly value={todo.writer}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">등록일</label>
                    <input type="text" readOnly value={todo.regDate}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">수정일</label>
                    <input type="text" readOnly value={todo.modDate}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-pink-100 hover:bg-pink-200 text-sky-800 rounded"
                        onClick={() => moveToList()}
                    >List</button>
                    <button
                        className="px-4 py-2 bg-emerald-200 hover:bg-emerald-300 text-sky-800 rounded"
                        onClick={clickModifyBtn}
                    >Modify</button>
                    <button
                        className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
                        onClick={clickDeleteBtn}
                    >Delete</button>
                    <button
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sky-800 rounded"
                        onClick={() => moveReadOrModify(todo.tno)}
                    >Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default ModifyComponent;