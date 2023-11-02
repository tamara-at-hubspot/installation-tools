import React from 'react';
import { Flex, Box, Button, Text } from '@hubspot/ui-extensions';
import ChecklistTable from '../components/ChecklistTable';

const SummaryPage = ({ checklist, onItemEdit }) => {
  return (
    <Flex direction="column" gap="md">
      <ChecklistTable checklist={checklist} onItemEdit={onItemEdit} />
      <Text>
        Please click on &quot;Edit&quot; to complete missing items. When the
        checklist is complete, you may send the work order to the installer.
      </Text>
      <Box alignSelf="end">
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            console.log('Sending the order to the installer...');
          }}
        >
          Send to Installer
        </Button>
      </Box>
    </Flex>
  );
};

export default SummaryPage;
