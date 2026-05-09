import type { ExperimentState } from '@/types';

export const STATE_META: Record<
    ExperimentState,
    { label: string; dot: string; ring: string; text: string }
> = {
    stable: {
        label: 'STABLE',
        dot: 'bg-primary-glow shadow-[0_0_10px_hsl(var(--primary-glow))]',
        ring: 'border-primary/40',
        text: 'text-primary-glow',
    },
    unstable: {
        label: 'UNSTABLE',
        dot: 'bg-accent shadow-[0_0_10px_hsl(var(--accent))]',
        ring: 'border-accent/40',
        text: 'text-accent',
    },
    incubating: {
        label: 'INCUBATING',
        dot: 'bg-primary animate-pulse',
        ring: 'border-primary/30',
        text: 'text-primary',
    },
    'coming-soon': {
        label: 'SEALED',
        dot: 'bg-muted-foreground/60',
        ring: 'border-border',
        text: 'text-muted-foreground',
    },
};
