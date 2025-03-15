/* 버튼 이벤트를 걸기 위해서 Props를 따로 처리.*/
interface PageComponentProps<T> {
    pageInfo: PageResponse<T>
    movePage: (page:number) => void
}

function PageComponent({pageInfo, movePage}: PageComponentProps<unknown>) {

    const {page, prev, next, start, end} = pageInfo

    const pageNumArr = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <div className="flex items-center justify-center space-x-2 mt-4 mb-4">

            {prev &&
                <div
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                    onClick={() => movePage(start - 1)}
                >
                    이전
                </div>
            }

            {pageNumArr.map((num, idx) =>
                <div key={idx}
                     className={`px-4 py-2 rounded-lg transition ${page === num ? 'bg-pink-100 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                     onClick={() => movePage(num)}
                >
                    {num}
                </div>)}

            {next &&
                <div className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                     onClick={() => movePage(end + 1)}
                >
                    다음
                </div>}
        </div>
    );
}

export default PageComponent;