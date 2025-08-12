export type Paginated<T> = {
  data: T[];
  metadata: { page: number, pageSize: number; totalCount: number }

}

export function paginate<T>(items: T[], page: number, pageSize: number): Paginated<T> {
  const start = (page - 1) * pageSize
  return {
    data: items.slice(start, start + pageSize),
    metadata: { page, pageSize, totalCount: items.length }
  }
}
