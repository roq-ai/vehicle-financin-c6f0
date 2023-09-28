import { LoanInterface } from 'interfaces/loan';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  loan_id: string;
  created_at?: any;
  updated_at?: any;

  loan?: LoanInterface;
  _count?: {};
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  loan_id?: string;
}
