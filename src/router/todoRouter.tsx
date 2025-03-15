import {lazy, Suspense} from "react";
import {Navigate, Route} from "react-router";
import TodoIndexPage from "../pages/todo/indexPage.tsx";

const Loading = <div>Loding.....</div>

/* lazy() 지연 로딩에 사용 */
const TodoList = lazy(() =>
    import('../pages/todo/listPage.tsx'))

const TodoAdd = lazy(() =>
    import('../pages/todo/addPage.tsx'))

const TodoRead = lazy(() =>
    import('../pages/todo/readPage.tsx'))

const TodoModify = lazy(() =>
    import('../pages/todo/modifyPage.tsx'))

function TodoRouter() {
    return (
        <Route path={'/todo'} element={<TodoIndexPage/>}>
            <Route index element={<Navigate to={'list'} replace /> }></Route>
            <Route path='list'
                   element={<Suspense fallback={Loading}> <TodoList/> </Suspense>}></Route>
            <Route path='add'
                   element={<Suspense fallback={Loading}> <TodoAdd/> </Suspense>}></Route>
            <Route path='read/:tno'
                   element={<Suspense fallback={Loading}> <TodoRead/> </Suspense>}></Route>
            <Route path='modify/:tno'
                   element={<Suspense fallback={Loading}> <TodoModify/> </Suspense>}></Route>
        </Route>
    );
}

export default TodoRouter;