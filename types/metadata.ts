export interface Metadata {
  page: number,
  pageSize: number,
  totalCount: number,
  totalPage: number,
  links: {
    self: string;
    first: string;
    last: string;
    next: string;
    prev: string | null;
  }
}