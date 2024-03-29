import { ButtonAnchor, ButtonGroup, IconVechai } from "~/components";
import { IconCalendar } from "~/libs";
import { classx } from "~/utils";

import type { HTMLElementProps } from "~/types";

interface ButtonGroupCTAProps extends HTMLElementProps {
  primaryCTA?: React.ReactNode;
  primaryCTAText?: string;
  secondaryCTA?: React.ReactNode;
  secondaryCTAText?: string;
}

export const ButtonGroupCTA = ({
  className,
  primaryCTA,
  primaryCTAText,
  secondaryCTA,
  secondaryCTAText,
}: ButtonGroupCTAProps) => {
  return (
    <ButtonGroup size="lg" className={classx("flex gap-3 sm:gap-5", className)}>
      {primaryCTA || (
        <ButtonAnchor href="/signup">
          {primaryCTAText || "Sign Up for Free"}
        </ButtonAnchor>
      )}
      {secondaryCTA || (
        <ButtonAnchor
          variant="outline"
          href="/demo"
          leftIcon={
            <IconVechai
              as={IconCalendar}
              label="schedule-demo"
              className="mr-2 h-5 w-5"
            />
          }
        >
          {secondaryCTAText || "Schedule Demo"}
        </ButtonAnchor>
      )}
    </ButtonGroup>
  );
};
