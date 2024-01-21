export interface ProjectProps {
  key: number;
  title: string;
  alt: string;
  img: string;
  type: string;
  github: string;
  live: string;
  tools: any;
}

export interface Tab {
  title: string;
  id: string;
  content: any;
}

export interface Link {
  index: number;
  label: string;
  link: string;
}
