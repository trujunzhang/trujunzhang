type SanityBody = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface PageInfo extends SanityBody {
  _type: "pageInfo";
  title: string;
  subTitle: string;
  sayHi: string;
  introduce: string;
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePicture: Image;
}

interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}
interface Skill extends SanityBody {
  _type: "skill";
  icon: Image;
  name: string;
  description: string;
  title: string;
  subTitle: string;
  skillTitle: string;
  // skill: TypedObject | TypedObject[];
  skill: PortableTextProps[];
}

interface Project extends SanityBody {
  _type: "project";
  title: string;
  summary: string;
  desktopImage: Image;
  mobileImage: Image;
  linkToGithub: string;
  linkToFigma: string;
  linkToGooglePlay: string;
  linkToAppStore: string;
  linkToWebsite: string;
  liveLink: string;
}

interface Client extends SanityBody {
  _type: "client";
  name: string;
  avatar: Image;
  role: string;
  quote: string;
}

interface Testimonial extends SanityBody {
  _type: "testimonial";
  title: string;
  description: string;
  clients: Client[];
}

interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface Image extends SanityBody {
  _type: "image";
  asset: {
    ref: string;
    type: "reference";
  };
}
