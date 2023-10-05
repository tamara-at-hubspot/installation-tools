import React, { useState } from 'react';
import { Flex, Box, ButtonRow, Button, TextArea } from '@hubspot/ui-extensions';

const DescriptionPage = ({ onCancel, onSubmit }) => {
  const [description, setDescription] = useState('');
  return (
    <Flex direction="column" gap="md">
      <TextArea
        label="Description"
        name="description"
        tooltip="Provide a brief description of the installation work order"
        required
        onInput={setDescription}
      />
      <Box alignSelf="end">
        <ButtonRow>
          <Button onClick={onCancel}>Cancel</Button>
          <Button disabled={!description} variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </ButtonRow>
      </Box>
    </Flex>
  );
};

export default DescriptionPage;
