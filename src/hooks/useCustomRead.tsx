import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getTodo} from "../api/todoApi.tsx";
import useCustomMove from "./useCustomMove.tsx";

const initState: TodoDTO = {
    tno: 0,
    title: '',
    writer: '',
    regDate: '',
    modDate: ''
};

export default function useCustomRead() {
    const {tno} = useParams()

    const {moveReadOrModify, moveToList} = useCustomMove()

    const [todo, setTodo] = useState(initState)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        getTodo(Number(tno)).then(data => {
            setTodo(data)
            setLoading(false)
        })

    }, [tno]);


    return {tno, todo, setTodo, loading, moveReadOrModify, moveToList}
}