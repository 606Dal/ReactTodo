import ReadComponent from "../../components/todo/readComponent.tsx";

function ReadPage() {
    return (
        <div className={'mt-3 p-3 bg-lime-50 w-full h-full'}>
            <div className={'mb-4 text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'}
            >Todo Read</div>
            <div>
                <ReadComponent />
            </div>
        </div>
    );
}

export default ReadPage;