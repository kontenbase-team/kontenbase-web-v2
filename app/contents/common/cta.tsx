import { ButtonAnchor, ButtonGroup, IconVechai } from "~/components";
import { IconCalendar } from "~/libs";

export const ButtonGroupCTA = () => {
  return (
    <ButtonGroup size="lg">
      <ButtonAnchor href="/signup">Sign Up for Free</ButtonAnchor>
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
    </ButtonGroup>
  );
};
