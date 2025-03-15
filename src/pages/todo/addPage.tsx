import AddComponent from "../../components/todo/addComponent.tsx";

function AddPage() {
    return (
        <div className={'my-3 p-3 bg-lime-50 w-full h-full'}>
            <div className={'my-3 text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'}>
                Todo Add
            </div>
            <div>
                <AddComponent></AddComponent>
            </div>
        </div>
    );
}

export default AddPage;