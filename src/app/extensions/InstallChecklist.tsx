import React from 'react';
import {
  Button,
  ErrorState,
  LoadingSpinner,
  Text,
  hubspot,
} from '@hubspot/ui-extensions';
import ChecklistTable from './lib/components/ChecklistTable';
import useChecklist from './lib/hooks/useChecklist';

hubspot.extend<'crm.record.tab'>((props) => (
  <Card runServerless={props.runServerlessFunction} />
));

const Card = ({ runServerless }) => {
  const { error, loading, checklist, reload } = useChecklist();
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
  return <ChecklistTable checklist={checklist} />;
};
