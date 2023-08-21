import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  paragraph: string;
}

const CommunityCard: React.FC<CardProps> = ({ icon, title, paragraph }) => {
  return (
      <div
        className='bg-surface-secondary-light p-5 w-11/12 max-w-[364px] max-h-[314px] rounded-[8px] border border-palette-blue-500/40 relative
        dark:bg-surface-secondary-dark dark:border-palette-green-800/50
         sm:p-[32px] sm:w-[364px] sm:h-[314px]'
      >

        <Image src={icon} alt='image' width={64} height={64} className='absolute right-5 top-[-20px] sm:static'/>

        <h1 className='text-palette-blue-600 text-2xl font-bold leading-4
          dark:text-palette-cyan-400
          sm:leading-8 sm:mt-8 sm:text-[32px]'
        >
          {title}
        </h1>

        <p className='mt-3 text-base text-on-secondary-light
          dark:text-on-primary-dark leading-4'
        >
          {paragraph}
        </p>
      </div>

  )
}

export default CommunityCard;
