import { onCleanup, onMount } from 'solid-js';

export const LatticeBackground = () => {
    // eslint-disable-next-line no-unassigned-vars
    let canvasRef: HTMLCanvasElement | undefined;

    onMount(() => {
        const canvas = canvasRef;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let raf = 0;
        let last = 0;
        const FPS = reduced ? 0 : 18;
        const frameMs = 1000 / Math.max(FPS, 1);
        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        type Node = { x: number; y: number; vx: number; vy: number };
        let nodes: Node[] = [];

        const seed = () => {
            const area = width * height;
            const count = Math.max(28, Math.min(70, Math.round(area / 28000)));
            nodes = Array.from({ length: count }).map(() => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.08,
                vy: (Math.random() - 0.5) * 0.08,
            }));
        };

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            seed();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            const maxDist = Math.min(180, Math.hypot(width, height) * 0.12);
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < maxDist) {
                        const alpha = (1 - d / maxDist) * 0.18;
                        ctx.strokeStyle = `hsla(268, 78%, 68%, ${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            for (const n of nodes) {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
                ctx.fillStyle = 'hsla(278, 90%, 80%, 0.55)';
                ctx.fill();
            }
        };

        const step = (ts: number) => {
            if (ts - last >= frameMs) {
                last = ts;
                for (const n of nodes) {
                    n.x += n.vx;
                    n.y += n.vy;
                    if (n.x < 0 || n.x > width) n.vx *= -1;
                    if (n.y < 0 || n.y > height) n.vy *= -1;
                }
                draw();
            }
            raf = requestAnimationFrame(step);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);
        if (!reduced) {
            raf = requestAnimationFrame(step);
        }

        onCleanup(() => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(raf);
        });
    });

    return (
        <div aria-hidden class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div
                class="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(1000px 600px at 80% -10%, hsl(268 78% 22% / 0.55), transparent 60%), radial-gradient(800px 500px at -10% 20%, hsl(278 70% 18% / 0.45), transparent 60%)',
                }}
            />
            <canvas ref={canvasRef} class="absolute inset-0 h-full w-full opacity-70" />
            <div
                class="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 50%, hsl(var(--background)) 100%)',
                }}
            />
        </div>
    );
};

export default LatticeBackground;
