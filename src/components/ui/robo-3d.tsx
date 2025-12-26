import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type Robo3DProps = {
  className?: string;
  scene?: string;
};

type Status = "carregando" | "pronto" | "erro";

export function Robo3D({
  className,
  scene = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
}: Robo3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState<Status>("carregando");

  const ariaLabel = useMemo(() => {
    if (status === "carregando") return "Carregando robô 3D";
    if (status === "erro") return "Falha ao carregar robô 3D";
    return "Robô 3D";
  }, [status]);

  useEffect(() => {
    setStatus("carregando");
    const timeoutId = window.setTimeout(() => {
      setStatus((current) => (current === "carregando" ? "erro" : current));
    }, 20000);
    return () => window.clearTimeout(timeoutId);
  }, [scene]);

  const scheduleUpdate = () => {
    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      setTilt(targetRef.current);
    });
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const x = Math.max(-1, Math.min(1, (px - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, (py - 0.5) * 2));

    targetRef.current = { x, y };
    scheduleUpdate();
  };

  const onMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  };

  const transform = useMemo(() => {
    const translateX = tilt.x * 18;
    const translateY = tilt.y * 10;
    const rotateX = tilt.y * -7;
    const rotateY = tilt.x * 10;
    return `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, [tilt.x, tilt.y]);

  return (
    <div ref={containerRef} className="relative w-full h-full" aria-label={ariaLabel} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {status !== "pronto" ? (
        <div className="absolute inset-0 grid place-items-center">
          {status === "carregando" ? (
            <div className="h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
          ) : (
            <div className="text-center px-6">
              <p className="text-sm font-semibold text-foreground">Não foi possível carregar o robô 3D</p>
              <p className="text-xs text-muted-foreground mt-1">Recarregue a página para tentar novamente.</p>
            </div>
          )}
        </div>
      ) : null}

      <div className={className} style={{ width: "100%", height: "100%", transform, transformStyle: "preserve-3d", transition: "transform 120ms ease-out" }}>
        <Suspense fallback={null}>
          <Spline scene={scene} onLoad={() => setStatus("pronto")} />
        </Suspense>
      </div>
    </div>
  );
}
