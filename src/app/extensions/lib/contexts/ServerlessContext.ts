import type {
  JsonValue,
  ServerlessFuncRunner,
  ServerlessRunnerParams,
} from '@hubspot/ui-extensions';
import { createContext } from 'react';

export type RunServerless = (
  args: ServerlessRunnerParams
) => Promise<JsonValue>;

export function wrapRunServerless(
  runServerless: ServerlessFuncRunner
): RunServerless {
  return (args) =>
    runServerless(args).then((result) => {
      if (result.status === 'SUCCESS') {
        return result.response;
      } else {
        throw new Error(result.message);
      }
    });
}

const defaultRunServerless: RunServerless = () => {
  throw new Error('Serverless is not available');
};

export const ServerlessContext =
  createContext<RunServerless>(defaultRunServerless);
