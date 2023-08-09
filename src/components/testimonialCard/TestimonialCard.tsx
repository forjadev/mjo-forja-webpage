import { HTMLAttributes, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  occupation: string;
  description: string;
  profileLink: string;
}

const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, occupation, description, profileLink, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="bg-surface-secondary flex flex-col w-72 h-40 sm:w-96 sm:h-56 py-3 px-4 sm:py-5 sm:px-6 
        border border-moss-light dark:border-moss-dark rounded-lg"
      >
        <div className="font-body font-normal text-on-primary text-xs sm:text-base w-full h-20 sm:h-32">
          {description}
        </div>

        <div className="flex gap-3">
          <Link href={`${profileLink}`} target="_blank" className="mt-1.5">
            <Image
              src={"/images/avatar.jpeg"}
              alt="logo"
              width={50}
              height={50}
              className="w-9 h-9 sm:w-12 sm:h-12 clip-path-['M0.663574_19.6069V15.0402C0.663574_13.0776_1.38496_11.1836_2.69051_9.71827L8.96316_2.67811C10.4811_0.974409_12.6544_0_14.9362_0H19.5602C21.9258_0_24.1701_1.04697_25.6902_2.8596L31.4793_9.76317C32.6873_11.2037_33.3494_13.0236_33.3494_14.9036V19.7435C33.3494_21.6235_32.6873_23.4434_31.4793_24.8839L25.6902_31.7875C24.1701_33.6001_21.9258_34.6471_19.5602_34.6471H14.9362C12.6544_34.6471_10.4811_33.6727_8.96317_31.969L2.69051_24.9288C1.38496_23.4635_0.663574_21.5694_0.663574_19.6069Z'] sm:clip-path-['M0.638428_30.4491V20.9627C0.638428_18.9879_1.36891_17.0828_2.68928_15.6141L14.0546_2.97269C15.5718_1.2851_17.7344_0.321289_20.0038_0.321289H30.3867C32.7399_0.321289_34.9737_1.35733_36.4938_3.1537L47.0747_15.6582C48.2969_17.1026_48.9676_18.9336_48.9676_20.8258V30.5861C48.9676_32.4782_48.2969_34.3092_47.0747_35.7536L36.4938_48.2581C34.9738_50.0545_32.7399_51.0905_30.3867_51.0905H20.0038C17.7344_51.0905_15.5718_50.1267_14.0546_48.4391L2.68927_35.7977C1.36891_34.3291_0.638428_32.424_0.638428_30.4491Z']"
            />
          </Link>

          <div className="font-display text-on-primary">
            <p className="text-lg sm:text-2xl font-normal">{name}</p>
            <p className="text-xs sm:text-base font-light">{occupation}</p>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
