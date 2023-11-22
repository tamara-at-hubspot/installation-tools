import { useCallback, useContext, useEffect, useState } from 'react';
import type { Checklist } from '../types/checklist';
import { ServerlessContext } from '../contexts/ServerlessContext';

const useChecklist = () => {
  const [loading] = useState(false);
  const [error] = useState(null);
  const [checklist, setChecklist] = useState<Checklist | null>(() => ({
    items: [
      { key: 'Address', completed: false },
      { key: 'Cost', completed: false },
      { key: 'Description', completed: true },
      { key: 'Contacts', completed: true },
    ],
  }));

  const serverless = useContext(ServerlessContext);

  const fetchChecklist = useCallback(async () => {
    try {
      // We could also use the fetchCrmObjectProperties action
      // This is just to illustrate serverless function calls
      const response = (await serverless({
        name: 'fetch-checklist-items',
        propertiesToSend: ['onsite_location', 'total_cost'],
      })) as Record<string, unknown>;
      const { address, cost } = response;
      console.log(response);
      setChecklist({
        items: [
          { key: 'Address', completed: !!address },
          {
            key: 'Cost',
            completed: cost !== undefined && cost !== null && cost !== '',
          },
          { key: 'Description', completed: true },
          { key: 'Contacts', completed: true },
        ],
      });
    } catch (err) {
      console.error(err);
    }
  }, [serverless]);

  useEffect(() => {
    fetchChecklist();
  }, [fetchChecklist]);

  return { loading, error, checklist, reload: fetchChecklist };
};

export default useChecklist;
