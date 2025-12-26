import { useEffect, useMemo, useRef, useState } from "react";

type Robo3DProps = {
  className?: string;
  src?: string;
  alt?: string;
};

type Status = "carregando" | "pronto" | "erro";

export function Robo3D({
  className,
  src = "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
  alt = "Robô 3D",
}: Robo3DProps) {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<Status>("carregando");

  const ariaLabel = useMemo(() => {
    if (status === "carregando") return "Carregando robô 3D";
    if (status === "erro") return "Falha ao carregar robô 3D";
    return alt;
  }, [alt, status]);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const onLoad = () => setStatus("pronto");
    const onError = () => setStatus("erro");

    el.addEventListener("load", onLoad);
    el.addEventListener("error", onError);

    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("error", onError);
    };
  }, [src]);

  return (
    <div className={"relative w-full h-full"} aria-label={ariaLabel}>
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

      <model-viewer
        ref={(node) => {
          viewerRef.current = node as unknown as HTMLElement | null;
        }}
        className={className}
        src={src}
        alt={alt}
        autoplay
        auto-rotate
        rotation-per-second="10deg"
        shadow-intensity="0"
        environment-image="neutral"
        interaction-prompt="none"
        loading="eager"
        exposure="1"
        camera-orbit="0deg 75deg 2.6m"
        field-of-view="30deg"
        disable-zoom
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
