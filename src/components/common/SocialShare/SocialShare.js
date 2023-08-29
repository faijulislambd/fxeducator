import ShareIcon from "@/components/utils/ShareIcon";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const SocialShare = () => {
  return (
    <ul className="flex space-x-3">
      <li>
        <ShareIcon>
          <BiLogoFacebook />
        </ShareIcon>
      </li>
      <li>
        <ShareIcon>
          <BiLogoLinkedin />
        </ShareIcon>
      </li>
      <li>
        <ShareIcon>
          <BiLogoTwitter />
        </ShareIcon>
      </li>
      <li>
        <ShareIcon>
          <BiLogoYoutube />
        </ShareIcon>
      </li>
    </ul>
  );
};

export default SocialShare;
