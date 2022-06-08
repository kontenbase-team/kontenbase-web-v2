/* eslint-disable react/no-array-index-key */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretRightIcon, FileIcon } from "@radix-ui/react-icons";

import { Anchor, RemixLink, IconVechai } from "~/components";
import {
  configNavigationDocs,
  configNavigationDropdownMenuItems,
  configNavigationExamples,
  configNavigationFeatures,
} from "~/configs";
import { IconMenu, IconSignIn, IconSignUp } from "~/libs";
import { classx } from "~/utils";

import type { HTMLElementProps, HTMLSpanElementProps } from "~/types";

export const NavigationBarDropdownMenu = () => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            data-color="primary"
            className="var(--vc-cursor) btn-solid btn btn-md flex rounded-base"
          >
            <IconVechai as={IconMenu} label="Menu" className="mr-1 h-4 w-4" />
            Menu
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={classx(
            "radix-side-top:animate-slide-up",
            "radix-side-bottom:animate-slide-down",
            "shadow-panel w-36 rounded-md px-1 py-1 md:w-48",
            "bg-panel border-panel",
          )}
        >
          {configNavigationDropdownMenuItems.map(({ to, text, icon }) => {
            return (
              <RemixLink key={to} to={to as string}>
                <DropdownMenuItem>
                  {icon}
                  <span className="flex-grow">{text}</span>
                  {/* {shortcut && <Shortcut>{shortcut}</Shortcut>} */}
                </DropdownMenuItem>
              </RemixLink>
            );
          })}

          <DropdownMenuSeparator />

          <Anchor href="/signup">
            <DropdownMenuItem>
              <IconSignUp className="dropdown-menu-icon" />
              <span className="flex-grow">Sign Up</span>
              {/* <Shortcut>⌘+⇧+U</Shortcut> */}
            </DropdownMenuItem>
          </Anchor>
          <Anchor href="/signin">
            <DropdownMenuItem>
              <IconSignIn className="dropdown-menu-icon" />
              <span className="flex-grow">Sign In</span>
              {/* <Shortcut>⌘+⇧+I</Shortcut> */}
            </DropdownMenuItem>
          </Anchor>

          <DropdownMenuSeparator />

          <DropdownMenu.Root>
            <DropdownMenuTriggerItem>
              <FileIcon className="dropdown-menu-icon" />
              <span className="flex-grow">Features</span>
            </DropdownMenuTriggerItem>
            <DropdownMenuSubContent>
              {configNavigationFeatures.map(({ to, text }) => {
                return (
                  <RemixLink key={to} to={to}>
                    <DropdownMenuItem>{text}</DropdownMenuItem>
                  </RemixLink>
                );
              })}
            </DropdownMenuSubContent>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenuTriggerItem>
              <FileIcon className="dropdown-menu-icon" />
              <span className="flex-grow">Examples</span>
            </DropdownMenuTriggerItem>
            <DropdownMenuSubContent>
              {configNavigationExamples.map(({ href, text }) => {
                return (
                  <Anchor key={href} href={href}>
                    <DropdownMenuItem>{text}</DropdownMenuItem>
                  </Anchor>
                );
              })}
            </DropdownMenuSubContent>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenuTriggerItem>
              <FileIcon className="dropdown-menu-icon" />
              <span className="flex-grow">Docs</span>
            </DropdownMenuTriggerItem>
            <DropdownMenuSubContent>
              {configNavigationDocs.map(({ href, text }) => {
                return (
                  <Anchor key={href} href={href}>
                    <DropdownMenuItem>{text}</DropdownMenuItem>
                  </Anchor>
                );
              })}
            </DropdownMenuSubContent>
          </DropdownMenu.Root>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export const Shortcut = ({ children }: HTMLSpanElementProps) => {
  return <span className="text-sm text-neutral-500">{children}</span>;
};

export const DropdownMenuSeparator = () => {
  return <DropdownMenu.Separator className="bg-separator my-1 h-px" />;
};

export const DropdownMenuLabel = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.Label className="select-none px-2 py-2 text-sm text-gray-700 dark:text-gray-200">
      {children}
    </DropdownMenu.Label>
  );
};

export const DropdownMenuTriggerItem = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.TriggerItem
      className={classx(
        "dropdown-menu-item",
        "radix-state-open:bg-primary-100",
        "dark:radix-state-open:bg-neutral-700",
        "flex w-full select-none items-center rounded-md text-sm outline-none",
      )}
    >
      {children}
      <CaretRightIcon className="h-3.5 w-3.5" />
    </DropdownMenu.TriggerItem>
  );
};

export const DropdownMenuSubContent = ({
  children,
  className,
}: HTMLElementProps) => {
  return (
    <DropdownMenu.Content
      side="left"
      className={classx(
        "origin-radix-dropdown-menu",
        "radix-side-right:animate-slide-right-fade",
        "radix-side-left:animate-slide-left-fade",
        "bg-panel shadow-panel border-panel w-full rounded-md px-1 py-1",
        className,
      )}
    >
      {children}
    </DropdownMenu.Content>
  );
};

export const DropdownMenuItem = ({ children, className }: HTMLElementProps) => {
  return (
    <DropdownMenu.Item
      className={classx(
        "dropdown-menu-item",
        "flex select-none items-center rounded-md text-sm outline-none",
        className,
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};
