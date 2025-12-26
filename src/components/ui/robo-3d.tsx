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
  const splineRef = useRef<any>(null);
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

  // Função para aplicar rotação diretamente
  const applyRotation = (x: number, y: number) => {
    const spline = splineRef.current;
    if (!spline) return;

    // Cache dos objetos
    if (!spline._cached) {
      const allObjects = spline.getAllObjects?.() || [];
      
      spline._cached = {
        head: spline.findObjectByName("Head") || 
              spline.findObjectByName("Cabeça") ||
              spline.findObjectByName("head") ||
              allObjects.find((obj: any) => obj.name?.toLowerCase().includes("head") || obj.name?.toLowerCase().includes("cabeça")),
        
        body: spline.findObjectByName("Body") || 
              spline.findObjectByName("Corpo") ||
              spline.findObjectByName("body") ||
              allObjects.find((obj: any) => obj.name?.toLowerCase().includes("body") || obj.name?.toLowerCase().includes("corpo")),
        
        neck: spline.findObjectByName("Neck") || 
              spline.findObjectByName("Pescoço") ||
              spline.findObjectByName("neck") ||
              allObjects.find((obj: any) => obj.name?.toLowerCase().includes("neck") || obj.name?.toLowerCase().includes("pescoço")),
        
        // Tenta encontrar o grupo raiz do robô
        root: allObjects.find((obj: any) => 
          obj.name?.toLowerCase().includes("robot") || 
          obj.name?.toLowerCase().includes("robo") ||
          obj.name?.toLowerCase().includes("character")
        )
      };
    }

    const { head, body, neck, root } = spline._cached;

    // MOVIMENTO HORIZONTAL (esquerda/direita) - já está bom
    if (head) {
      head.rotation.y = x * 0.7; // Movimento horizontal da cabeça
    }

    if (neck) {
      neck.rotation.y = x * 0.4; // Pescoço acompanha
    }

    if (body) {
      body.rotation.y = x * 0.25; // Corpo sutil
    }

    // MOVIMENTO VERTICAL (cima/baixo) - TURBINADO E CORRIGIDO
    if (head) {
      // INVERTIDO: mouse pra cima = cabeça pra cima (valor negativo)
      head.rotation.x = -y * 0.8;
      // Adiciona rotação Z para dar mais dinamismo diagonal
      head.rotation.z = x * y * 0.15;
    }

    if (neck) {
      neck.rotation.x = -y * 0.5;
    }

    if (body) {
      body.rotation.x = -y * 0.15;
    }

    // Se tiver grupo raiz, aplica rotação global também
    if (root && root !== head && root !== body) {
      root.rotation.y = x * 0.1;
      root.rotation.x = -y * 0.1;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Pre-calcula rect
    let cachedRect = container.getBoundingClientRect();
    
    const updateRect = () => {
      cachedRect = container.getBoundingClientRect();
    };
    
    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(container);

    const clamp = (value: number, min: number, max: number) => 
      Math.min(max, Math.max(min, value));

    const onPointerMove = (event: PointerEvent) => {
      if (cachedRect.width <= 0 || cachedRect.height <= 0) return;
      
      const x = clamp((event.clientX - cachedRect.left) / cachedRect.width, 0, 1);
      const y = clamp((event.clientY - cachedRect.top) / cachedRect.height, 0, 1);
      
      // Aplica IMEDIATAMENTE
      applyRotation((x - 0.5) * 2, -(y - 0.5) * 2);
    };

    const onPointerLeave = () => {
      applyRotation(0, 0);
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      resizeObserver.disconnect();
    };
  }, []);

  const splineStyle = useMemo(() => {
    const scale = 0.84;
    return {
      width: "150%",
      height: "150%",
      position: "absolute" as const,
      left: "50%",
      top: "58%",
      transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
      transformOrigin: "center",
      // Remove qualquer transição CSS que possa causar delay
      transition: "none",
      opacity: 1,
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-visible" aria-label={ariaLabel}>
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

      <div className={className} style={{ width: "100%", height: "100%", position: "relative" }}>
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            style={splineStyle}
            onLoad={(spline) => {
              splineRef.current = spline;
              setStatus("pronto");
              
              // DESABILITA animações automáticas para entrada instantânea
              try {
                spline.stop(); // Para qualquer animação rodando
                const allObjects = spline.getAllObjects?.() || [];
                
                // Remove delays de animação
                allObjects.forEach((obj: any) => {
                  if (obj.emitEvent) {
                    obj.emitEvent('mouseHover', { target: obj });
                  }
                });
                
                console.log("🤖 Todos os objetos do Spline:", allObjects.map((obj: any) => ({
                  name: obj.name,
                  type: obj.type
                })));
              } catch (e) {
                console.log("Spline carregado (sem controle de animações)");
              }
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}