'use client';

/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from '@calcom/embed-react';
import { ComponentPropsWithoutRef, useEffect } from 'react';

const CalendarWidget = (props: ComponentPropsWithoutRef<typeof Cal>) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return <Cal {...props} />;
};

export { CalendarWidget };
