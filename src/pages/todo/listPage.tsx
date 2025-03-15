import ListComponent from "../../components/todo/listComponent.tsx";

function ListPage() {
    return (
        <div className={'mt-3 p-3 bg-lime-50 w-full h-full'}>
            <div className={'text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'}
            >Todo List</div>
            <div>
                <ListComponent></ListComponent>
            </div>
        </div>
    );
}

export default ListPage;