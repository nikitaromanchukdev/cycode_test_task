// src/styles/styled.d.ts
import "styled-components";
import type { AppTheme } from "./theme"; // import your theme object

// type Theme = typeof theme;
declare module "styled-components" {
    export interface DefaultTheme extends AppTheme {}
}
