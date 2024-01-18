export type ProjectProps = {
  key: number;
  title: string;
  alt: string;
  img: string;
  type: string;
  github: string;
  live: string;
  tools: any;
};

export type ProjectCardProps = {
  project: ProjectProps;
}

export type Tab = {
  title: string;
  id: string;
  content: any;
};
