import axios from "axios";

const HOST:string = import.meta.env.VITE_API_SERVER
// console.log(HOST)

export async function getTodo(tno:number ): Promise<TodoDTO> {

    // 응답.
    try {
        const res = await axios.get(`${HOST}/${tno}`)
        return res.data
    }catch (err) {
        console.log(err)
        throw Promise.reject("Data Not Found")
    }
}

export async function getTodoList ( page:number = 1 , size: number = 10, type ?: string, keyword ?: string ): Promise<PageResponse<TodoDTO>> {

    const param = {page:page, size:size, type:type, keyword:keyword}

    const res = await axios.get(`${HOST}/list`, {params:param})

    return res.data
}

// 지금 투두는 title만 수정 가능
export async function updateTodo ( tno: number, title: string ):Promise<TodoDTO> {

    const res = await axios.put(
        `${HOST}/${tno}`, {title:title, tno:tno})

    return res.data
}

export async function deleteTodo (tno: number):Promise<void> {

    await axios.delete(`${HOST}/${tno}`)
}

export async function postTodo (todo:TodoAdd): Promise<number> {

    const res = await axios.post(`${HOST}`, todo)

    return res.data
}