import { ButtonAnchor, ButtonGroup, IconVechai } from "~/components";
import { IconCalendar } from "~/libs";
import { classx } from "~/utils";

import type { HTMLElementProps } from "~/types";

interface ButtonGroupCTAProps extends HTMLElementProps {
  primaryCTA?: React.ReactNode;
  secondaryCTA?: React.ReactNode;
}

export const ButtonGroupCTA = ({
  className,
  primaryCTA,
  secondaryCTA,
}: ButtonGroupCTAProps) => {
  return (
    <ButtonGroup size="lg" className={classx("flex gap-3 sm:gap-5", className)}>
      {primaryCTA || (
        <ButtonAnchor href="/signup">Start from Free</ButtonAnchor>
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
          Schedule Demo
        </ButtonAnchor>
      )}
    </ButtonGroup>
  );
};
