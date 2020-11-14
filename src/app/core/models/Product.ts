export interface ProductListResponse {
  content: Product[];
  totalElements: number;
}
export interface Product{
  id: number;
  name: string;
  cartonCost: number;
}
