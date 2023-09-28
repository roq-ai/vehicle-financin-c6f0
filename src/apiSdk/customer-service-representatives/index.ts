import queryString from 'query-string';
import {
  CustomerServiceRepresentativeInterface,
  CustomerServiceRepresentativeGetQueryInterface,
} from 'interfaces/customer-service-representative';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerServiceRepresentatives = async (
  query?: CustomerServiceRepresentativeGetQueryInterface,
): Promise<PaginatedInterface<CustomerServiceRepresentativeInterface>> => {
  return fetcher('/api/customer-service-representatives', {}, query);
};

export const createCustomerServiceRepresentative = async (
  customerServiceRepresentative: CustomerServiceRepresentativeInterface,
) => {
  return fetcher('/api/customer-service-representatives', {
    method: 'POST',
    body: JSON.stringify(customerServiceRepresentative),
  });
};

export const updateCustomerServiceRepresentativeById = async (
  id: string,
  customerServiceRepresentative: CustomerServiceRepresentativeInterface,
) => {
  return fetcher(`/api/customer-service-representatives/${id}`, {
    method: 'PUT',
    body: JSON.stringify(customerServiceRepresentative),
  });
};

export const getCustomerServiceRepresentativeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/customer-service-representatives/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCustomerServiceRepresentativeById = async (id: string) => {
  return fetcher(`/api/customer-service-representatives/${id}`, { method: 'DELETE' });
};
