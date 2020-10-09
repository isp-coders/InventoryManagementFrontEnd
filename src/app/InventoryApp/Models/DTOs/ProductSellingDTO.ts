import { SalePaymentMethod } from './SalePaymentMethod';

export interface ProductSellingDto {
    Total: number;
    UserId: number;
    BranchId: number;
    Receipt: string;
    CustomerName: string;
    CustomerPhone: string;
    CustomerInfoId: number;
    PaymentMethodIds: number[];
    ProductIds: number[];
    SalePaymentMethods: SalePaymentMethod[];


}