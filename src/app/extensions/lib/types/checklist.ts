export const ItemOptions = {
  Address: 'Address',
  Cost: 'Install cost',
  Description: 'Job description',
  Contacts: 'Associated contacts',
} as const;

export interface ChecklistItem {
  key: keyof typeof ItemOptions;
  completed: boolean;
}

export interface Checklist {
  items: ChecklistItem[];
}
