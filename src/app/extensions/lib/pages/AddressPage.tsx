import React, { useCallback, useContext, useState } from 'react';
import {
  Flex,
  Box,
  ButtonRow,
  Button,
  Text,
  TextArea,
} from '@hubspot/ui-extensions';
import { ServerlessContext } from '../contexts/ServerlessContext';

const AddressPage = ({ onCancel, onSubmit }) => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const serverless = useContext(ServerlessContext);

  const handleSubmit = useCallback(async () => {
    try {
      await serverless({
        name: 'save-property',
        propertiesToSend: ['hs_object_id'],
        parameters: { name: 'onsite_location', value: address },
      });
      onSubmit();
    } catch (err) {
      setError(`Failed to save: ${err}`);
    }
  }, [address, serverless, onSubmit]);

  return (
    <Flex direction="column" gap="md">
      <TextArea
        label="Address"
        name="address"
        tooltip="Provide an address for the onsite location"
        required
        onInput={setAddress}
      />
      {error && (
        // This is not a good way to display error message. It's just to demo catching errors.
        <Text>{error}</Text>
      )}
      <Box alignSelf="end">
        <ButtonRow>
          <Button onClick={onCancel}>Cancel</Button>
          <Button disabled={!address} variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </ButtonRow>
      </Box>
    </Flex>
  );
};

export default AddressPage;
