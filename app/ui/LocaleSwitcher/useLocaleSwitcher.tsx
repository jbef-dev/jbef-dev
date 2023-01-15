'use client';

import { useState } from 'react';

export const useLocaleSwitcher = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen(open => !open);

  return {
    open,
    toggleOpen,
  };
};
