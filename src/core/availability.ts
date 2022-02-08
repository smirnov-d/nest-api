export class Availability {
  _id: number;

  /* product */

  productName: string;

  productId: number;

  /* category */

  productCategoryName: string;

  productCategoryId: number;

  /* department */

  departmentName: string;

  departmentId: number;

  geo: {
    lat: number;
    lng: number;
  };

  rating: number;

  /* additional info */

  count?: number;

  schedule?: Array<{
    doctorId: number;
    doctorName: string;

    time: Date;
    date: Date;
  }>;
}
