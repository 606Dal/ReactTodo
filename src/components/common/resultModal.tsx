
interface ResultModalProps {
    show: boolean
    closeResultModal: () => void
    msg: string
}

function ResultModal({show, closeResultModal, msg}: ResultModalProps) {
    if(!show){
        return <></>
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}>
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">Result</h2>
                <p className="text-xl text-gray-600 mb-6">{msg}</p>
                <button
                    onClick={closeResultModal}
                    className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ResultModal;