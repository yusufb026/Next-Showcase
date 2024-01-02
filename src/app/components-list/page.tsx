'use client';

import Button from '@/components/reusable/Button';
import React from 'react';

const page = () => {
  return (
    <div className="m-4">
      <h1 className="mb-4 text-4xl">Reusable Components</h1>
      <div className="space-x-4 space-y-4">
        <Button variant="danger" size="lg">
          Click Here
        </Button>
      </div>
    </div>
  );
};

export default page;
