import Image from 'next/image';
import React from 'react';

type ContentCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  tag?: string;
};

const ContentCard = ({ imgSrc, title, description, tag }: ContentCardProps) => {
  return (
    <div className="w-[28rem] h-[30rem] rounded-lg border-2 border-[#3F3F46] bg-[#1F2025] overflow-hidden">
      <div className="w-full h-[16rem]">
        <Image src={imgSrc} alt={title} width={448} height={256} />
      </div>
      <div className="p-8 space-y-8">
        <div className="flex gap-8 items-center">
          <h4 className="text-4xl font-bold leading-4">{title}</h4>
          {tag && (
            <span className="flex content-center items-center bg-[#269bc033] rounded-3xl px-4 py-1 text-[#3DA2FF] text-base">
              {tag}
            </span>
          )}
        </div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
