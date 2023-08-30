import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="gap-4 flex">
      <a href="https://discord.gg/cnZMfSb7" target="_blanck">
        <FaDiscord
          size={24}
          className="text-surface-secondary-dark dark:text-surface-secondary-light"
          />
      </a>

      <a href="https://github.com/forjadev" target="_black">
        <FaGithub
          size={24}
          className="text-surface-secondary-dark dark:text-surface-secondary-light"
          />
      </a>

      <a href="https://www.youtube.com/@Arthur404dev" target="_black">
        <AiOutlineYoutube
          size={24}
          className="text-surface-secondary-dark dark:text-surface-secondary-light"
          />
      </a>

      <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A96180319&keywords=forja&origin=RICH_QUERY_SUGGESTION&position=0&searchId=1f685f01-2f1a-4c0e-9f46-dd4a00471d77&sid=(%3Ag" target="_black">
        <FaLinkedin
          size={24}
          className="text-surface-secondary-dark dark:text-surface-secondary-light"
          />
      </a>
    </div>
  );
}
