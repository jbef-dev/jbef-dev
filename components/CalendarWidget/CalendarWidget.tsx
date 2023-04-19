'use client';

import { ComponentPropsWithoutRef, useEffect } from 'react';

// import Cal, { getCalApi } from '@calcom/embed-react';
//
// const CalendarWidget = (props: ComponentPropsWithoutRef<typeof Cal>) => {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi();
//       cal('ui', {
//         styles: { branding: { brandColor: '#000000' } },
//         hideEventTypeDetails: false,
//       });
//     })();
//   }, []);
//
//   return <Cal {...props} />;
// };

const CalendarWidget = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div {...props}>
      <div>CALENDAR WIDGET is currently broken from cal.com, check updates</div>
    </div>
  );
};

export default CalendarWidget;
