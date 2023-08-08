import {FaDiscord, FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/ai'

export default function SocialMedia() {
    return(
        <div className="gap-4 flex">
            <FaDiscord size={24}/>
            <FaGithub size={24}/>
            <AiOutlineYoutube size={24}/>
            <FaLinkedin size={24}/>
        </div>
    )

}