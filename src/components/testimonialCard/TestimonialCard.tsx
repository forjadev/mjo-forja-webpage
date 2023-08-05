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
  (
    {
      name,
      occupation,
      description,
      profileLink,
      ...props
    }: TestimonialCardProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className="bg-surface-secondary w-96 h-56 py-5 px-6 border border-moss-light dark:border-moss-dark rounded-lg"
      >
        <div className="font-body font-normal text-on-primary w-80 h-32">
          {description}
        </div>

        <div className="flex items-center gap-3">
          <Link href={`${profileLink}`}>
            <Image
              src={"/images/avatar.jpeg"}
              alt="logo"
              width={50}
              height={50}
              className="clip-path-['M0.638428_30.4491V20.9627C0.638428_18.9879_1.36891_17.0828_2.68928_15.6141L14.0546_2.97269C15.5718_1.2851_17.7344_0.321289_20.0038_0.321289H30.3867C32.7399_0.321289_34.9737_1.35733_36.4938_3.1537L47.0747_15.6582C48.2969_17.1026_48.9676_18.9336_48.9676_20.8258V30.5861C48.9676_32.4782_48.2969_34.3092_47.0747_35.7536L36.4938_48.2581C34.9738_50.0545_32.7399_51.0905_30.3867_51.0905H20.0038C17.7344_51.0905_15.5718_50.1267_14.0546_48.4391L2.68927_35.7977C1.36891_34.3291_0.638428_32.424_0.638428_30.4491Z']"
            />
          </Link>

          <div className="font-display text-on-primary">
            <p className="text-2xl font-normal">{name}</p>
            <p className="font-light">{occupation}</p>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
