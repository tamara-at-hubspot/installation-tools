export const ChecklistItem = {
  Address: 'Address',
  Cost: 'Install cost',
  Description: 'Job description',
  Contacts: 'Associated contacts',
} as const;

export interface Checklist {
  items: { item: keyof typeof ChecklistItem; completed: boolean }[];
}
