import React from 'react';
import {
  Box,
  Button,
  ButtonRow,
  ErrorState,
  Flex,
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

  return (
    <Flex direction="column" gap="md">
      <ChecklistTable checklist={checklist} />
      <Box alignSelf="end">
        <ButtonRow>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              console.log('Sending the order to the installer...');
            }}
          >
            Send to Installer
          </Button>
        </ButtonRow>
      </Box>
    </Flex>
  );
};
