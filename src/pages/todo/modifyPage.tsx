import ModifyComponent from "../../components/todo/modifyComponent.tsx";

function ModifyPage() {
    return (
        <div className={'mt-3 p-3 bg-lime-50 w-full h-full'}>
            <div className={'mb-4 text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'}
            >Todo Modify</div>
            <div>
                <ModifyComponent />
            </div>
        </div>
    );
}

export default ModifyPage;