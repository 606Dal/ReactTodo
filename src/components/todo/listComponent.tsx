import {useEffect, useState} from "react";
import {getTodoList} from "../../api/todoApi.tsx";
import {formatKoreanDate} from "../../types/date.ts";
import useCustomMove from "../../hooks/useCustomMove.tsx";
import LoadingComponent from "../common/loadingComponent.tsx";
import ListSizeComponent from "../common/listSizeComponent.tsx";
import PageComponent from "../common/pageComponent.tsx";

const initState:PageResponse<TodoDTO> = {
    dtoList: [],
    total:0,
    size: 0,
    end : 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}

function ListComponent() {

    const {page, size, loading, setLoading, type, keyword, refresh, changeSearchPage, moveReadOrModify, movePage, changeSize} = useCustomMove()

    const [pageInfo, setPageInfo] = useState(initState)
    const [searchKeyword, setSearchKeyword] = useState(keyword)
    const [selectedType, setSelectedType] = useState(type)

    useEffect(() => {

        setLoading(true)

        getTodoList(page, size, type, keyword).then(data => {
            setPageInfo(data)
            setLoading(false)
        })

    }, [page, size, type, keyword, refresh])

    const handleSearch = () => {
        changeSearchPage(1, selectedType, searchKeyword)
    }

    return (
        <div className=" mt-10 mr-2 ml-2 pb-3">
            <LoadingComponent isLoading={loading}/>

            {/* 검색 창 */}
            <div className="w-full max-w-2xl mx-auto flex items-center gap-2">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="flex-[6] p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className="flex-[2] px-4 py-2 text-lg font-bold text-white bg-teal-500 rounded-lg shadow-sm hover:bg-teal-700"
                >
                    Pind
                </button>
                <div className="relative flex-[2]">
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full px-4 py-2 text-lg font-medium border rounded-lg shadow-sm bg-white focus:ring focus:ring-blue-300 focus:outline-none"
                    >
                        <option value="T">title</option>
                        <option value="T">---</option>
                    </select>
                </div>
            </div>
            {/* 검색 창 끝 */}

            <ListSizeComponent size={size} changeSize={changeSize} />

            {/* 리스트 목록 */}
            <div>
                {pageInfo.dtoList && pageInfo.dtoList.length > 0 ? (
                    <ul className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        {pageInfo.dtoList.map(todo => (
                            <li key={todo.tno}
                                onClick={() => moveReadOrModify(todo.tno)}
                                className="grid grid-cols-8 items-center p-4 border-b last:border-none hover:bg-gray-100"
                            >
                                <span className="font-medium text-gray-900">{todo.tno}</span>
                                <span className="font-medium text-gray-900 col-span-4">{todo.title}</span>
                                <span className="text-gray-600">{todo.writer}</span>
                                <span className="text-gray-500 text-sm col-span-2">{formatKoreanDate(todo.regDate)}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center text-gray-500">
                        검색 결과가 없습니다.
                    </div>
                )}
            </div>

            <PageComponent pageInfo={pageInfo} movePage={movePage} />
        </div>
    );
}

export default ListComponent;