import Image from 'next/image';
import React from 'react';

type ContentCardProps = {
  imgSrc?: string;
  title: string;
  description: string;
  tag?: string;
};

const ContentCard = ({ imgSrc = '/images/contentCardDefault.png', title, description, tag }: ContentCardProps) => {
  return (
    <div 
      className="
      w-72 max-w-[281px] h-auto min-h-[387px] md:w-[28rem] md:max-w-[450px] md:min-h-[477px] 
      rounded-lg border-2 overflow-hidden
    border-surface-metal-dark bg-surface-secondary-dark"
    >
      <div className="w-full h-52 md:h-64 relative">
        <Image src={imgSrc} alt={title} fill objectFit='cover'/>
      </div>
      <div className="p-4 md:p-8 text-surface-primary-light">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
          <h4 className="text-3xl md:text-5xl font-bold leading-4 font-display">
            {title}
          </h4>
          {tag && (
            <span className="
              text-center text-sm md:text-base
              min-w-[40px] min-h-[20px] md:min-w-[60px] md:min-h-[27px]
              bg-[#269bc033] rounded-3xl text-[#3DA2FF]"
            >
              {tag}
            </span>
          )}
        </div>
        <p className="mt-4 md:mt-9">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
