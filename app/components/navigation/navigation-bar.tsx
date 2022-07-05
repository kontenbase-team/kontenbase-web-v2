import {
  ExternalLinks,
  Logo,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
  
  NavigationBarNavMenu,
  NavigationBarDropdownMenu,
  ButtonAnchor,
} from "~/components";
import { configStyle, configNavigationBarLinks } from "~/configs";
import { classx } from "~/utils";

export const NavigationBar = () => {
  return (
    <nav
      id="navigation-bar"
      className={classx("navigation-bar navigation-bar-scrolled")}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 sm:gap-4">
          <NavigationBarLogo />
          <div className="flex gap-1">
            {configStyle.navigationBar === "simple" && <NavigationBarLinks />}
            {configStyle.navigationBar === "complex" && (
              <NavigationBarNavMenu />
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden text-xl sm:flex">
            <ExternalLinks />
          </div>

          <ThemeSwitcher />

          <div className="hidden xl:flex">
            <NavigationBarAuth />
          </div>

          <div className="flex xl:hidden">
            <NavigationBarDropdownMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavigationBarLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <RemixLink
        to="/"
        className="transition-logo text-2xl tracking-wide hover:text-primary-500"
      >
        <Logo />
      </RemixLink>
    </div>
  );
};

export const NavigationBarLinks = () => {
  return (
    <div className="hidden w-auto items-center justify-between xl:flex">
      <ul className="text-md flex flex-row gap-1 font-medium">
        {configNavigationBarLinks.map((navItem) => {
          return (
            <li key={navItem.text}>
              <RemixNavLink end to={navItem.to}>
                {navItem.text}
              </RemixNavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const NavigationBarAuth = () => {
  return (
    <div id="navigation-bar-auth" className="space-x-2">
      <ButtonAnchor
        href="/signup"
        // className="btn-solid btn btn-md"
        // data-color="primary"
      >
        Start for Free
      </ButtonAnchor>
    </div>
  );
};
