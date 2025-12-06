import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
setupZoneTestEnv();

// Tell TypeScript we are extending the global window object
declare global {
  interface HTMLCanvasElement {
    getContext(
      contextId: "2d" | string
    ): CanvasRenderingContext2D | null;
  }
}

// Override the getContext for JSDOM
(global as any).window.HTMLCanvasElement.prototype.getContext = function (
  contextId: string
): CanvasRenderingContext2D | null {
  if (contextId === "2d") {
    // Create a minimal mock of CanvasRenderingContext2D
    return {
      fillRect: () => {},
      clearRect: () => {},
      measureText: () => ({ width: 0 }),
      save: () => {},
      restore: () => {},
      beginPath: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      closePath: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      rect: () => {},
      clip: () => {},
      // Add any other methods Chart.js might call:
      moveTo: () => {},
      lineTo: () => {},
      bezierCurveTo: () => {},
      quadraticCurveTo: () => {},
      drawImage: () => {},
      fillText: () => {},
      strokeText: () => {},
      setTransform: () => {},
      resetTransform: () => {},
      // Properties
      canvas: document.createElement("canvas"),
      // Required by TS but unused
      font: "",
      textAlign: "left",
      textBaseline: "top",
      direction: "inherit",
    } as unknown as CanvasRenderingContext2D;
  }
  return null;
};

export {}; // Important: make this a module