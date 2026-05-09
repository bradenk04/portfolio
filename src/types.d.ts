export type Project = {
    name: string;
    tagline: string;
    problem: string;
    status: 'Active' | 'WIP' | 'Archived';
    featured?: boolean;
    hasDocs?: boolean;
    links: {
        label: string;
        href: string;
    }[];
    stack: string[];
};

export type ProjectData = {
    id: string;
    data: Project;
};

export type ExperimentState = 'stable' | 'unstable' | 'incubating' | 'coming-soon';

export type Experiment = {
    id: string;
    codename: string;
    title: string;
    summary: string;
    tags: string[];
    state: ExperimentState;
    href?: string;
    external?: boolean;
    readings?: { label: string; value: string }[];
};
