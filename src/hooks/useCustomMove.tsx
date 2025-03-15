import {useLocation, useNavigate, useParams, useSearchParams} from "react-router";
import {useState} from "react";

// number 타입으로 반환하는 함수
function getNumber(str: string|null, defaultValue:number): number {
    if(!str) {
        return defaultValue
    }
    /* 숫자가 아닌 게 들어왔을 때 체크 */
    const num = Number(str);
    if (isNaN(num)) {
        return defaultValue;
    }

    return num;
}

export default function useCustomMove () {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()

    const queryString = location.search

    const page: number = getNumber(searchParams.get("page"), 1)

    const size: number = getNumber(searchParams.get("size"), 10)

    // 타입 & 키 추가 (검색용)
    const type: string = searchParams.get("type") ?? 'T';
    const keyword: string = searchParams.get("keyword") ?? '';

    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const params = useParams();

    const tnoStr = params.tno

    const tno =  Number(tnoStr)

    // 검색된 페이지
    const changeSearchPage = (pageParam:number, typeParam :string = type, keywordParam : string = keyword) => {

        // 동일한 페이지를 호출하면 리프레시
        if(page === pageParam) {
            setRefresh(!refresh)
        }

        const params = new URLSearchParams({
            page: String(pageParam),
            size: String(size)
        })

        if (keywordParam) {
            params.append('type', typeParam)
            params.append('keyword', keywordParam)
        }

        navigate(`/todo/list?${params.toString()}`)
    }

    // 페이지 버튼으로 이동
    const movePage = (pageNum:number): void => {

        if(page === pageNum){
            setRefresh(!refresh)
            return
        }

        const params = new URLSearchParams({
            page: String(pageNum)
        })
        params.append('size', size.toString())

        if (keyword) {
            params.append('type', type)
            params.append('keyword', keyword)
        }

        navigate(`/todo/list?${params.toString()}`)
    }

    const changeSize = (sizeParam:number): void => {

        if(size === sizeParam){
            setRefresh(!refresh)
            return
        }

        const params = new URLSearchParams({
            page: String(page),
            size : String(sizeParam)
        })

        if (keyword) {
            params.append('type', type)
            params.append('keyword', keyword)
        }

        navigate(`/todo/list?${params.toString()}`)
    }

    const moveReadOrModify = (tnoNumber:number, path ?:string) => {

        const movePath = !path ? 'read':path

        navigate(`/todo/${movePath}/${tnoNumber}${queryString}`)
    }

    const moveToList = () => {
        navigate(`/todo/list${queryString}`)
    }


    return {tno, loading, setLoading, refresh, page, size, type, keyword, changeSearchPage, movePage, moveReadOrModify, moveToList, changeSize}
}