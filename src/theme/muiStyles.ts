declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    text: React.CSSProperties;
    header: React.CSSProperties;
    title: React.CSSProperties;
    "sub-title": React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text: true;
    header: true;
    title: true;
    "sub-title": true;
  }
}

export {};
