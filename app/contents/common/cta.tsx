import { ButtonAnchor, ButtonGroup, IconVechai } from "~/components";
import { IconCalendar } from "~/libs";

interface ButtonGroupCTAProps {
  primaryCTA?: React.ReactNode;
  secondaryCTA?: React.ReactNode;
}

export const ButtonGroupCTA = ({
  primaryCTA,
  secondaryCTA,
}: ButtonGroupCTAProps) => {
  return (
    <ButtonGroup size="lg" className="flex justify-center">
      {primaryCTA || (
        <ButtonAnchor href="/signup">Sign Up for Free</ButtonAnchor>
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
