import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoanOfficerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LoanOfficerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  user_id?: string;
}
