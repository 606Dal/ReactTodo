
// 다양한 활용을 위한 제네릭 타입 사용
interface PageResponse<T> {
    dtoList: T[],
    end: number,
    next: boolean,
    prev: boolean,
    page: number,
    size: number,
    start: number,
    total: number
}