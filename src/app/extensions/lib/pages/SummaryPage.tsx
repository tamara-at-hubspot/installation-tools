import React from 'react';
import { Flex, Box, ButtonRow, Button } from '@hubspot/ui-extensions';
import ChecklistTable from '../components/ChecklistTable';

const SummaryPage = ({ checklist, onItemEdit }) => {
  return (
    <Flex direction="column" gap="md">
      <ChecklistTable checklist={checklist} onItemEdit={onItemEdit} />
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

export default SummaryPage;
