import Image from 'next/image';


interface CardProps {
  icon: string;
  title: string;
  paragraph: string;
}

const CommunityCard: React.FC<CardProps> = ({ icon, title, paragraph }) => {
  return (
          <div className='px-[28px] py-[24px] w-[364px] rounded-[8px] border border-[#3B6670]  text-sm p-2 bg-[#1F2025]'>

          <div className='rounded-full border border-[##212E2C] w-[64px] h-[64px]	 flex items-center justify-center bg-[#212E2C]'>
            <Image src={icon} alt='imagem' width={40} height={40}/>
          </div>
        <h1 className='mt-8 text-green-500 text-[32px] font-bold'>{title}</h1>
        <div className='mt-2 text-xl text-[#D9E0EE]'>{paragraph}</div>
      </div>
  )
}

export default CommunityCard;