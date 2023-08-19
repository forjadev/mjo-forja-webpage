import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  paragraph: string;
}

const CommunityCard: React.FC<CardProps> = ({ icon, title, paragraph }) => {
  return (
      <div
        className='bg-surface-secondary-dark p-[32px] w-[364px] h-[314px] rounded-[8px] border border-palette-green-800/50'
      >

        <Image src={icon} alt='image' width={64} height={64}/>

        <h1 className='mt-8 text-palette-cyan-400 text-[32px] font-bold leading-8'>
          {title}
        </h1>

        <p className='mt-2 text-base text-on-primary-dark leading-4'>
          {paragraph}
        </p>
      </div>

  )
}

export default CommunityCard;
