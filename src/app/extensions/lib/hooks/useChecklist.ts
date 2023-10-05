import { useCallback, useState } from 'react';
import { type Checklist } from '../types/checklist';

const useChecklist = () => {
  const [loading] = useState(false);
  const [error] = useState(null);
  const [checklist] = useState<Checklist | null>(() => ({
    items: [
      { item: 'Address', completed: true },
      { item: 'Cost', completed: true },
      { item: 'Description', completed: false },
      { item: 'Contacts', completed: true },
    ],
  }));

  // TODO actually fetch the checklist states

  const reload = useCallback(() => {}, []);

  return { loading, error, checklist, reload };
};

export default useChecklist;
