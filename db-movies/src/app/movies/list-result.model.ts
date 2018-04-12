export interface ListResult<T> {
    items: T[],
    page: number,
    total_results: number,
    total_pages: number,
}
