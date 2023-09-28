interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Loan Officer'],
  customerRoles: ['Customer'],
  tenantRoles: ['Loan Officer', 'Customer Service Representative'],
  tenantName: 'Lender',
  applicationName: 'Vehicle Financing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage user profile', 'Apply for loans', 'View loan status', 'Interact with customer service'],
  ownerAbilities: [
    'Manage loan details',
    'Manage personal information',
    'Create, read and edit loan applications',
    "Manage borrower's information",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/df8ccc35-1008-41fa-a8d5-7202c5371ab4',
};
