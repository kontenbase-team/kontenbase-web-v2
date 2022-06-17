import { Anchor, Icon } from "~/components";
import { configExternalLinks } from "~/configs";
import { classx } from "~/utils";

import type { HTMLElementProps } from "~/types";

interface ExternalLinksProps extends HTMLElementProps {
  links?: Array<any>;
}

export const ExternalLinks = ({
  links = configExternalLinks,
  className,
}: ExternalLinksProps) => {
  return (
    <div className={classx("flex flex-wrap gap-3 text-2xl", className)}>
      {links.map((item) => {
        return (
          <Anchor
            key={item.name}
            href={item.url}
            className="transition-colors hover:text-primary-500"
          >
            <Icon name={item.slug || item.name} />
          </Anchor>
        );
      })}
    </div>
  );
};
