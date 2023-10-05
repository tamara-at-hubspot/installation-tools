import React from 'react';
import { Text, hubspot } from '@hubspot/ui-extensions';

hubspot.extend<'crm.record.tab'>(() => <Card />);

const Card = () => {
  return <Text>Nothing to see.</Text>;
};
