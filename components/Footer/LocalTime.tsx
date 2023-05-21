'use client';

import * as React from 'react';

export function LocalTime() {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const localTime = new Intl.DateTimeFormat('default', {
      timeZone: 'Europe/Madrid',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date());

    setTime(localTime);
  }, []);

  return <span>{time} — UTC+2</span>;
}
