import { useTheme } from "~/components";
import { classx } from "~/utils";

import type { HTMLElementProps } from "~/types";

export const Logo = ({ className }: HTMLElementProps) => {
  const { isLight } = useTheme();

  const logoImageUrl = isLight
    ? "/assets/images/kontenbase-on-light.png"
    : "/assets/images/kontenbase-on-dark.png";

  return (
    <div className={classx("flex items-center", className)}>
      <img
        className="h-[30px] sm:h-[40px]"
        src={logoImageUrl}
        alt="Kontenbase"
      />
    </div>
  );
};
