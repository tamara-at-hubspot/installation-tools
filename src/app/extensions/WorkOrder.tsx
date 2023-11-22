import React, { useCallback, useState } from 'react';
import {
  Button,
  Divider,
  Form,
  NumberInput,
  TextArea,
  ToggleGroup,
  hubspot,
} from '@hubspot/ui-extensions';

hubspot.extend<'crm.record.tab'>(({ runServerlessFunction, actions }) => (
  <Card runServerless={runServerlessFunction} showAlert={actions.addAlert} />
));

const SERVICE_OPTIONS = [
  { label: 'Install', value: 'install', default: 500 },
  { label: 'Initial Measurement', value: 'initial_measurement', default: 500 },
  { label: 'Final Measurement', value: 'final_measurement' },
  { label: 'Final Site/Print Check', value: 'final_check', default: 300 },
  { label: 'Steel First', value: 'steel_first' },
  { label: 'Other', value: 'other' },
];

const Card = ({ runServerless, showAlert }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleService = useCallback((selectedValues) => {
    setSelectedOptions(selectedValues ?? []);
  }, []);

  const saveWorkOrder = useCallback(() => {
    runServerless({
      name: 'save-order',
      propertiesToSend: ['hs_object_id'],
    }).then((response) => {
      const { status } = response;
      if (status === 'SUCCESS') {
        showAlert({
          type: 'success',
          message: 'The work order has been saved!',
        });
      } else {
        showAlert({
          type: 'danger',
          message: `Failed to save the work order: ${response.message}. Please try again.`,
        });
      }
    });
  }, [runServerless, showAlert]);

  return (
    <Form>
      <ToggleGroup
        label="Services"
        name="services"
        options={SERVICE_OPTIONS}
        toggleType="checkboxList"
        onChange={toggleService}
      />
      {selectedOptions.map((value) => {
        const option = SERVICE_OPTIONS.find((option) => option.value === value);
        return option ? (
          <NumberInput
            name={option.value}
            label={option.label}
            defaultValue={option.default}
          />
        ) : null;
      })}
      <TextArea label="Notes" name="notes" />
      <Divider />
      <Button disabled={selectedOptions.length === 0} onClick={saveWorkOrder}>
        Save
      </Button>
    </Form>
  );
};
