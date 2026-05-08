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
