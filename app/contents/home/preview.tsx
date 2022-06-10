/* eslint-disable react/jsx-no-bind */
import {
  Dialog,
  Fragment,
  Transition,
  useTheme,
  VideoYouTube,
} from "~/components";
import { useState } from "~/hooks";

export const HomePreview = () => {
  const { isLight } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const colorMode = isLight ? "light" : "dark";

  return (
    <section className="layout-padding">
      <div className="flex items-center justify-center">
        <img
          src={`/assets/screenshots/home-${colorMode}.png`}
          alt={`Kontenbase Dashboard (${colorMode})`}
          className="border-panel shadow-primary aspect-video w-full max-w-5xl rounded-base"
        />
        <div
          role="button"
          tabIndex={0}
          onClick={openModal}
          onKeyPress={openModal}
          className="pointer group absolute flex items-center"
        >
          <img
            src="/assets/images/play-button.svg"
            alt="Play Introduction Video"
            width={100}
            className="transition duration-100 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-primary-transparent fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-panel shadow-primary stack-v w-full max-w-4xl transform gap-4 overflow-hidden rounded-base p-2 transition-all">
                  <div className="relative overflow-auto rounded-base">
                    <VideoYouTube
                      title="Kontenbase Alpha - Product Demo"
                      embedId="vGxKw-mWAB0"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};
