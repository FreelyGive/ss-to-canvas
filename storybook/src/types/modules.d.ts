// Declare JSX component modules so TypeScript doesn't try to parse them directly
declare module "@/components/*" {
  import type { ComponentType } from "react";
  const Component: ComponentType<any>;
  export default Component;
  export * from Component;
}

declare module "@/lib/*" {
  const module: any;
  export default module;
  export * from module;
}

// Also declare specific .jsx file pattern
declare module "*.jsx" {
  import type { ComponentType } from "react";
  const Component: ComponentType<any>;
  export default Component;
}
