import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@hubspot/ui-extensions';
import {
  ItemOptions,
  type Checklist,
  type ChecklistItem,
} from '../types/checklist';
import StatusTag from './StatusTag';

interface Props {
  checklist: Checklist;
  onItemEdit: (item: ChecklistItem) => void;
}

const ChecklistTable = ({ checklist, onItemEdit }: Props) => {
  return (
    <Table bordered>
      <TableHead>
        <TableRow>
          <TableHeader>Item</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {checklist.items.map((item, idx) => (
          <TableRow key={`quote-${idx}`}>
            <TableCell>{ItemOptions[item.key]}</TableCell>
            <TableCell>
              <StatusTag
                item={item}
                onEdit={() => {
                  onItemEdit(item);
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ChecklistTable;
