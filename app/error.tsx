'use client';

import { FC, useEffect } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
  error: Error;
}

const ErrorPage: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState title="Error" subtitle="Something went wrong" />;
};

export default ErrorPage;
