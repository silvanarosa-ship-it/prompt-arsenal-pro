/// <reference types="vite/client" />

import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        autoplay?: boolean;
        "auto-rotate"?: boolean;
        "rotation-per-second"?: string;
        "shadow-intensity"?: number | string;
        "environment-image"?: string;
        "interaction-prompt"?: string;
        loading?: "auto" | "eager" | "lazy";
        exposure?: number | string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
        "disable-zoom"?: boolean;
      };
    }
  }
}

export {};
