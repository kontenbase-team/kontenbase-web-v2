import {
  Anchor,
  BadgeProductHunt,
  ExternalLinks,
  FooterComplexFormSubscribe,
  FooterCopyrightText,
  Logo,
  RemixLink,
} from "~/components";
import { configNavigationSitemap } from "~/configs";

/**
 * Footer Complex
 *
 * Used with:
 * - Logo
 * - ExternalLinks
 * - FooterComplexFormSubscribe
 * - FooterComplexSitemap
 * - FooterComplexBottomTexts
 */

export const FooterComplex = () => {
  return (
    <footer className="footer footer-complex">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="space-y-4 text-neutral-900 dark:text-neutral-100">
            <RemixLink to="/" className="flex">
              <Logo className="filter-dim" />
            </RemixLink>
            <ExternalLinks />
            <BadgeProductHunt />
          </div>
          <div className="container-low mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <FooterComplexFormSubscribe />
            <FooterComplexSitemap />
          </div>
        </div>
        <div className="mt-12 pt-8">
          <FooterComplexBottomTexts />
        </div>
      </div>
    </footer>
  );
};

export const FooterComplexSitemap = () => {
  return (
    <>
      {configNavigationSitemap.map((item) => {
        return (
          <div key={item.name} className="col-span-1 pt-2 sm:col-span-1">
            <h4 className="font-bold uppercase tracking-wider">{item.name}</h4>
            <nav className="text-md mt-3 flex flex-col space-y-2">
              {item.links &&
                item.links.map((subItem) => {
                  return (
                    <RemixLink key={subItem.text} to={subItem.to}>
                      {subItem.text}
                    </RemixLink>
                  );
                })}
              {item.anchors &&
                item.anchors.map((subItem) => {
                  return (
                    <Anchor key={subItem.text} href={subItem.href}>
                      {subItem.text}
                    </Anchor>
                  );
                })}
            </nav>
          </div>
        );
      })}
    </>
  );
};

export const FooterComplexBottomTexts = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FooterCopyrightText className="text-left text-sm text-gray-400" />

      <nav className="container-low flex flex-wrap justify-start gap-4 text-sm text-gray-400 md:justify-end">
        <RemixLink to="/terms">Terms &amp; Conditions</RemixLink>
        <RemixLink to="/privacy">Privacy Policy</RemixLink>
        {/* <RemixLink to="/cookies">Cookies</RemixLink> */}
      </nav>
    </div>
  );
};
