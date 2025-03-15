
import LoadingComponent from "../common/loadingComponent.tsx";
import useCustomRead from "../../hooks/useCustomRead.tsx";

function ReadComponent() {

    const {todo, loading, moveReadOrModify, moveToList} = useCustomRead()

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">

            <LoadingComponent isLoading={loading} />

            <div className="space-y-3">
                <div>
                    <label className="block text-gray-600 text-sm font-medium">번호</label>
                    <input type="text"  readOnly value={todo.tno}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">제목</label>
                    <input type="text"  readOnly value={todo.title}
                           className="w-full p-2 border rounded bg-gray-100 text-gray-700"/>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm font-medium">작성자</label>
                    <input type="text"  readOnly value={todo.writer}
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
                        onClick={() => moveReadOrModify(todo.tno, 'modify')}
                    >Modify</button>
                </div>

            </div>
        </div>
    );
}

export default ReadComponent;