export type Project = {
    name: string;
    tagline: string;
    problem: string;
    status: 'Active' | 'WIP' | 'Archived';
    featured?: boolean;
    links: {
        label: string;
        href: string;
    }[];
    stack: string[];
};
