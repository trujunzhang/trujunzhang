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
  image: Image;
  linkToBuild: string;
  liveLink: string;
  summary: string;
  technologies: Technology[];
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
