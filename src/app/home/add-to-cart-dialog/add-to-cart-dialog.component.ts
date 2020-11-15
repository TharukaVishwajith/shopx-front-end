import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductService} from '../../core/services/product.service';
import {ProductPriceResponse} from '../../core/models/ProductPrice';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-to-cart-dialog',
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrls: ['./add-to-cart-dialog.component.css']
})
export class AddToCartDialogComponent {

  message: string;
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  pname = '';

  selectedType = 'UNIT';
  totalCost = 0;
  noOfCarton = null;
  noOfUnits = null;
  qty = 0;
  types: Type[] = [
    {value: 'UNIT', viewValue: 'unit'},
    {value: 'CARTON', viewValue: 'carton'}];

  static errorHandler(error): void{
    console.log(error);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AddToCartDialogComponent>, private productService: ProductService) {
    if (data){
      this.message = data.message || this.message;
      this.pname = data.pname;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  calculatePrice(): void {
    this.productService.calculatePrice({
      productId: this.data.pid,
      purchaseType: this.selectedType,
      qty: this.qty
    }).subscribe({
      complete: () => {},
      error: (error) => {AddToCartDialogComponent.errorHandler(error);},
      next: (res) => this.responseHandler(res)});
    // this.dialogRef.close(true);
  }

  responseHandler(res: ProductPriceResponse): void {
    this.totalCost = res.cost;
    this.noOfUnits = res.noOfUnits;
    this.noOfCarton = res.noOfCartons;
  }


}
