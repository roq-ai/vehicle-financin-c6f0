const mapping: Record<string, string> = {
  'customer-service-representatives': 'customer_service_representative',
  lenders: 'lender',
  loans: 'loan',
  'loan-officers': 'loan_officer',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
