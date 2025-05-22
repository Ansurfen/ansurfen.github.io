export type ExperiencePosition = {
    subtitle: string;
    year: string;
    description: string;
    tags: string[];
};

export type Experience = {
    title: string;
    positions: ExperiencePosition[];
};