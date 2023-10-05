import React from 'react';
import { Tag } from '@hubspot/ui-extensions';

const StatusTag = ({ completed }: { completed: boolean }) => {
  if (completed) {
    return <Tag variant="success">Completed</Tag>;
  }
  return <Tag>Edit</Tag>;
};

export default StatusTag;
