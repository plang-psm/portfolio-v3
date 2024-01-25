export interface ProjectProps {
  key: number;
  title: string;
  alt: string;
  img: string;
  type: string[];
  github: string;
  live: string;
  tools: string[];
};

export interface Tab {
  title: string;
  id: string;
  content: any;
};

export interface TabProps {
  active: boolean;
  selectTab: () => void
  children: string;
};

export interface Link {
  index: number;
  label: string;
  link: string;
};