import styles from '@/styles';

const HomePage = () => {
  return (
    <div className={styles.xPadding}>
      <section aria-label='hero section on Home page' className='text-center'>
        <div className='px-2'>
          <h1 className='font-clash_display font-medium text-[32px] text-dark_gray_clr-200'>
            Photography is poetry and beautiful untold stories
          </h1>

          <p className='font-satoshi font-medium mt-10 text-dark_gray_clr-300'>
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>

        <div className='h-[355px] bg-black mt-6 mb-28'>images</div>
      </section>
    </div>
  );
};

export default HomePage;
