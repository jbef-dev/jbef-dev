export const Footer = () => {
  return (
    <footer className='flex w-full justify-center p-12'>
      <div className='flex w-full max-w-screen-xl flex-col gap-8'>
        <div className='flex flex-col text-5xl'>
          <span className='font-bold'>jorge@jbef.dev</span>
          <span className='font-bold'>+34 606 516 718</span>
        </div>
        <div className='flex justify-between text-2xl'>
          <span>Calle Ramón Gallud 49, 3 - B</span>
          <span>03181 - Torrevieja (Alicante)</span>
          <div>
            <div>icon1</div>
            <div>icon2</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
