import { FooterCommon, FooterComplex, Anchor } from "~/components";
import { configMeta } from "~/configs";
import { classx, getCurrentYear } from "~/utils";

import type { HTMLElementProps } from "~/types";

/**
 * Footer with variants
 */

interface FooterProps {
  variant?: "common" | "complex";
}

export const Footer = ({ variant = "complex" }: FooterProps) => {
  if (variant === "common") {
    return <FooterCommon />;
  }

  if (variant === "complex") {
    return <FooterComplex />;
  }

  return <footer className="footer-none">{configMeta.name}</footer>;
};

export const FooterCopyrightText = ({ className }: HTMLElementProps) => {
  return (
    <p className={classx("container-low space-x-1 space-y-1", className)}>
      <span>&copy;</span>
      <span>{getCurrentYear()}</span>
      <Anchor href={configMeta.url}>{configMeta.name}</Anchor>
    </p>
  );
};
