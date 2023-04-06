import FeatureRow from './FeatureRow';

const FeatureSection = () => {
  return (
    <>
      <FeatureRow
        icons={[
          <path
            key={1}
            className='stroke-blue-600'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
          />,
          <path
            key={2}
            className='stroke-slate-500'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
          />,
        ]}
        titles={[
          <span key={'title1'} className='font-medium'>
            Developer
          </span>,
          <span key={'title2'} className='font-extralight'>
            on duty
          </span>,
        ]}
        paragraph='Keep your website updated! Update to your website when needed, within 48h, as many times as you need. Its like having a web developer in your team on payroll.'
        align='left'
      />
      <FeatureRow
        icons={[
          <path
            key={1}
            className='stroke-violet-600'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
          />,
          <path
            key={2}
            className='stroke-fuchsia-800'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
          />,
        ]}
        titles={[
          <span key={'title1'} className='font-medium'>
            Hand coded
          </span>,
          <span key={'title2'} className='font-extralight'>
            websites
          </span>,
        ]}
        paragraph='Forget about cookie-cutter websites, we hand code all our work, using the most modern technologies used by all major companies. We make billion-dollar company technologies accessible to everyone. From the largest layout to the smallest button, everything is custom coded and the performance benefits are obvious.'
        align='right'
      />
      <FeatureRow
        icons={[
          <path
            key={1}
            className='stroke-emerald-700'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />,
          <path
            key={2}
            className='stroke-yellow-700'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />,
        ]}
        titles={[
          <span key={'title1'} className='font-medium'>
            Flexible
          </span>,
          <span key={'title2'} className='font-extralight'>
            payments
          </span>,
        ]}
        paragraph='I believe in a long lasting business relationship between me and my clients. That&rsquo;s why I offer a lower barrier to entry pricing strategy, charging less up-front and providing more value each month via maintenance, updates and constant improvements to each project!'
        align='left'
      />
    </>
  );
};

export default FeatureSection;
