
interface ListSizeComponentProps {
    size: number;
    changeSize : (size:number) => void
}

function ListSizeComponent({ size, changeSize }: ListSizeComponentProps) {

    const options = [10, 20, 30, 40, 50];

    return (
        <div className="w-full max-w-2xl mx-auto flex justify-end p-4">
            <select
                value={size}
                onChange={(e) => changeSize(Number(e.target.value))}
                className="border border-gray-300 rounded p-2"
            >
                {options.map(option => (
                    <option key={option} value={option}>{option}개씩 보기</option>
                ))}
            </select>
        </div>
    );
}

export default ListSizeComponent;