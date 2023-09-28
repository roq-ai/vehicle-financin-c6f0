import queryString from 'query-string';
import { LoanOfficerInterface, LoanOfficerGetQueryInterface } from 'interfaces/loan-officer';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLoanOfficers = async (
  query?: LoanOfficerGetQueryInterface,
): Promise<PaginatedInterface<LoanOfficerInterface>> => {
  return fetcher('/api/loan-officers', {}, query);
};

export const createLoanOfficer = async (loanOfficer: LoanOfficerInterface) => {
  return fetcher('/api/loan-officers', { method: 'POST', body: JSON.stringify(loanOfficer) });
};

export const updateLoanOfficerById = async (id: string, loanOfficer: LoanOfficerInterface) => {
  return fetcher(`/api/loan-officers/${id}`, { method: 'PUT', body: JSON.stringify(loanOfficer) });
};

export const getLoanOfficerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/loan-officers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLoanOfficerById = async (id: string) => {
  return fetcher(`/api/loan-officers/${id}`, { method: 'DELETE' });
};
