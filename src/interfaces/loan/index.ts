import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { LenderInterface } from 'interfaces/lender';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  loan_amount: number;
  interest_rate: number;
  loan_term: number;
  monthly_emi: number;
  disbursal_date: any;
  user_id: string;
  lender_id: string;
  created_at?: any;
  updated_at?: any;
  vehicle?: VehicleInterface[];
  user?: UserInterface;
  lender?: LenderInterface;
  _count?: {
    vehicle?: number;
  };
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  lender_id?: string;
}
