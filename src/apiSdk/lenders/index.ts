import queryString from 'query-string';
import { LenderInterface, LenderGetQueryInterface } from 'interfaces/lender';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLenders = async (query?: LenderGetQueryInterface): Promise<PaginatedInterface<LenderInterface>> => {
  return fetcher('/api/lenders', {}, query);
};

export const createLender = async (lender: LenderInterface) => {
  return fetcher('/api/lenders', { method: 'POST', body: JSON.stringify(lender) });
};

export const updateLenderById = async (id: string, lender: LenderInterface) => {
  return fetcher(`/api/lenders/${id}`, { method: 'PUT', body: JSON.stringify(lender) });
};

export const getLenderById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/lenders/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLenderById = async (id: string) => {
  return fetcher(`/api/lenders/${id}`, { method: 'DELETE' });
};
