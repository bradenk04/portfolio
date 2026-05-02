export type Project = {
    title: string;
    blurb: string;
    status: 'Active' | 'In progress' | 'Maintained' | 'Abandoned';
    tech: string[];
    links?: { label: string; href: string }[];
};
