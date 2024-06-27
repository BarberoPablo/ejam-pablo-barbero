declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    text: React.CSSProperties;
    header: React.CSSProperties;
    "big-title": React.CSSProperties;
    "big-sub-title": React.CSSProperties;
    step: React.CSSProperties;
    "mid-title": React.CSSProperties;
    "mid-sub-title": React.CSSProperties;
    "crossed-text": React.CSSProperties;
    "blue-text": React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text: true;
    header: true;
    "big-title": true;
    "big-sub-title": true;
    step: true;
    "mid-title": true;
    "mid-sub-title": true;
    "crossed-text": true;
    "blue-text": true;
  }
}

export {};
