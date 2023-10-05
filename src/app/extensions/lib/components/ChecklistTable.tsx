import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@hubspot/ui-extensions';
import { ChecklistItem, type Checklist } from '../types/checklist';
import StatusTag from './StatusTag';

interface Props {
  checklist: Checklist;
}

const ChecklistTable = ({ checklist }: Props) => {
  return (
    <Table bordered>
      <TableHead>
        <TableRow>
          <TableHeader>Item</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {checklist.items.map(({ item, completed }, idx) => (
          <TableRow key={`quote-${idx}`}>
            <TableCell>{ChecklistItem[item]}</TableCell>
            <TableCell>
              <StatusTag completed={completed} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ChecklistTable;
