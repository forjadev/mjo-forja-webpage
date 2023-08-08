import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="gap-4 flex">
      <FaDiscord
        size={24}
        className="text-surface-secondary-dark dark:text-surface-secondary-light"
      />
      <FaGithub
        size={24}
        className="text-surface-secondary-dark dark:text-surface-secondary-light"
      />
      <AiOutlineYoutube
        size={24}
        className="text-surface-secondary-dark dark:text-surface-secondary-light"
      />
      <FaLinkedin
        size={24}
        className="text-surface-secondary-dark dark:text-surface-secondary-light"
      />
    </div>
  );
}
