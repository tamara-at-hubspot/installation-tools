import React, { useState } from 'react';
import {
  Button,
  ErrorState,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import { type ChecklistItem } from './lib/types/checklist';
import useChecklist from './lib/hooks/useChecklist';
import SummaryPage from './lib/pages/SummaryPage';
import DescriptionPage from './lib/pages/DescriptionPage';
import {
  ServerlessContext,
  wrapRunServerless,
} from './lib/contexts/ServerlessContext';

hubspot.extend<'crm.record.tab'>(({ runServerlessFunction }) => (
  // Wrap the serverless runner in a Context so that we don't have to prop drill
  <ServerlessContext.Provider value={wrapRunServerless(runServerlessFunction)}>
    <Card />
  </ServerlessContext.Provider>
));

const Card = () => {
  const { error, loading, checklist, reload } = useChecklist();
  const [page, setPage] = useState<ChecklistItem['key'] | null>(null);

  if (loading) {
    return (
      <LoadingSpinner
        label="Loading the checklist..."
        layout="centered"
        showLabel
      />
    );
  }
  if (error || !checklist) {
    return (
      <ErrorState title="Checklist information is currently not available.">
        <Text>Please try again in a few minutes.</Text>
        <Button onClick={reload}>Try again</Button>
      </ErrorState>
    );
  }

  switch (page) {
    case 'Description':
      return (
        <DescriptionPage
          onSubmit={() => {
            setPage(null);
            reload();
          }}
          onCancel={() => setPage(null)}
        />
      );
    // TODO: add pages for other items
    default:
      return (
        <SummaryPage
          checklist={checklist}
          onItemEdit={(item) => setPage(item.key)}
        />
      );
  }
};
