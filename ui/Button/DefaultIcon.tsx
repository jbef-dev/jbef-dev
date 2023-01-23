export const DefaultIcon = () => {
  return (
    <svg
      viewBox='1 0 5 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[9px] overflow-visible duration-[inherit]'
    >
      <g className='duration-[inherit] group-active:translate-x-[1px] group-hover:translate-x-[1px]'>
        <path
          d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
          stroke='currentColor'
          strokeWidth='1.0'
        />
      </g>
      <g className='translate-x-[-2px] opacity-0 duration-[inherit] group-active:opacity-100 group-hover:opacity-100'>
        <path d='M7 4.5H0' stroke='currentColor' strokeWidth='1.0' />
      </g>
    </svg>
  );
};
