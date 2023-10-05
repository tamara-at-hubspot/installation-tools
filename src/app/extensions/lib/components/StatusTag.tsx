import React from 'react';
import { Tag } from '@hubspot/ui-extensions';
import { type ChecklistItem } from '../types/checklist';

interface Props {
  item: ChecklistItem;
  onEdit: () => void;
}

const StatusTag = ({ item, onEdit }: Props) => {
  if (item.completed) {
    return <Tag variant="success">Completed</Tag>;
  }
  return <Tag onClick={onEdit}>Edit</Tag>;
};

export default StatusTag;
