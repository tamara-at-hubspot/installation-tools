import { useCallback, useState } from 'react';
import { type Checklist } from '../types/checklist';

const useChecklist = () => {
  const [loading] = useState(false);
  const [error] = useState(null);
  const [checklist, setChecklist] = useState<Checklist | null>(() => ({
    items: [
      { key: 'Address', completed: true },
      { key: 'Cost', completed: true },
      { key: 'Description', completed: false },
      { key: 'Contacts', completed: true },
    ],
  }));

  // TODO actually fetch the checklist states

  const reload = useCallback(() => {
    setChecklist({
      items: [
        { key: 'Address', completed: true },
        { key: 'Cost', completed: true },
        { key: 'Description', completed: true },
        { key: 'Contacts', completed: true },
      ],
    });
  }, [setChecklist]);

  return { loading, error, checklist, reload };
};

export default useChecklist;
