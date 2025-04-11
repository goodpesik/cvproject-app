'use client';
import Astronomy from '../icons/astronomy.svg';
import Briefcase from '../icons/briefcase.svg';
import Cat from '../icons/cat.svg';
import Cert from '../icons/cert.svg';
import Check from '../icons/check.svg';
import Chess from '../icons/chess.svg';
import Cooking from '../icons/cooking.svg';
import Cycling from '../icons/cycling.svg';
import Dancing from '../icons/dancing.svg';
import Dog from '../icons/dog.svg';
import Education from '../icons/education.svg';
import Experience from '../icons/experience.svg';
import Facebook from '../icons/facebook.svg';
import Fishing from '../icons/fishing.svg';
import Gaming from '../icons/gaming.svg';
import Gardening from '../icons/gardening.svg';
import Github from '../icons/github.svg';
import Gitlab from '../icons/gitlab.svg';
import Globe from '../icons/globe.svg';
import Heart from '../icons/heart.svg';
import Hiking from '../icons/hiking.svg';
import Info from '../icons/info.svg';
import Instagram from '../icons/instagram.svg';
import Language from '../icons/language.svg';
import Linkedin from '../icons/linkedin.svg';
import LocationIcon from '../icons/location.svg';
import Mail from '../icons/mail.svg';
import MessageSquare from '../icons/message-square.svg';
import Music from '../icons/music.svg';
import Paw from '../icons/paw.svg';
import Phone from '../icons/phone.svg';
import Photography from '../icons/photography.svg';
import Piano from '../icons/piano.svg';
import PieChart from '../icons/pie-chart.svg';
import Reading from '../icons/reading.svg';
import Robotics from '../icons/robotics.svg';
import Sport from '../icons/sport.svg';
import Summary from '../icons/summary.svg';
import Target from '../icons/target.svg';
import Text from '../icons/text.svg';
import Traveling from '../icons/traveling.svg';
import Twitter from '../icons/twitter.svg';
import User from '../icons/user.svg';
import Writing from '../icons/writing.svg';
import Youtube from '../icons/youtube.svg';
import { IconsSettings } from '../app/models/icons.settings';

type IconProps = {
  name: IconsSettings | undefined;
  width?: number;
  height?: number;
};

export function Icon({ name, width, height }: IconProps) {
  const IconsMap: { [key: string]: any } = {
    Astronomy: Astronomy,
    Briefcase: Briefcase,
    Cat: Cat,
    Cert: Cert,
    Check: Check,
    Chess: Chess,
    Cooking: Cooking,
    Cycling: Cycling,
    Dancing: Dancing,
    Dog: Dog,
    Education: Education,
    Experience: Experience,
    Facebook: Facebook,
    Fishing: Fishing,
    Gaming: Gaming,
    Gardening: Gardening,
    Github: Github,
    Gitlab: Gitlab,
    Globe: Globe,
    Heart: Heart,
    Hiking: Hiking,
    Info: Info,
    Instagram: Instagram,
    Language: Language,
    Linkedin: Linkedin,
    Location: LocationIcon,
    Mail: Mail,
    MessageSquare: MessageSquare,
    Music: Music,
    Paw: Paw,
    Phone: Phone,
    Photography: Photography,
    Piano: Piano,
    PieChart: PieChart,
    Reading: Reading,
    Robotics: Robotics,
    Sport: Sport,
    Summary: Summary,
    Target: Target,
    Text: Text,
    Traveling: Traveling,
    Twitter: Twitter,
    User: User,
    Writing: Writing,
    Youtube: Youtube,
  };

  if (!name) {
    return null;
  }

  const SvgIcon = IconsMap[name];

  return (
    <>
      {SvgIcon ? (
        <div className="icon">
          <SvgIcon style={{ width: `${width}px`, height: `${height}px` }} />
        </div>
      ) : null}
    </>
  );
}
