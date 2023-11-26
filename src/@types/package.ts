import { ProductManager } from './product';
import { PromotionManager } from './promotion';

// ----------------------------------------------------------------------
export type PackageManager = {
  packageId: string;
  name: string;
  description: string;
  price: number;
  promotionId: null | string;
  roofArea: number;
  electricBill: number;
  status: boolean;
  promotion: PromotionManager;
  promotionPrice: number;
  constructionContract: Array<any>;
  feedback: Array<any>;
  packageProduct: PackageProduct[];
  presentImage: string;
};

export type PackageProduct = {
  productId: string;
  packageId: string;
  status: boolean;
  quantity: number;
  product: ProductManager;
};
