export interface ProductPriceRequest{
  productId: number;
  purchaseType: string;
  qty: number;
}

export interface ProductPriceResponse{
  onlyUnits: number;
  noOfCartons: number;
  noOfUnits: number;
  cost: number;
}
