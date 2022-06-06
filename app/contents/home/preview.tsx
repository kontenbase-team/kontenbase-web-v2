import { useState } from "~/hooks";

export const HomePreview = () => {
  const [, setOpened] = useState(false);

  const openModal = () => {
    setOpened(true);
  };

  return (
    <section>
      <div className="flex items-center justify-center">
        <img
          src="/assets/images/kontenbase-home-hero.png"
          alt="Kontenbase Dashboard"
          className="border-panel max-w-5xl rounded-base"
        />
        <div
          role="button"
          tabIndex={0}
          onClick={openModal}
          onKeyPress={openModal}
          className="pointer group absolute flex items-center"
        >
          <img
            className="transition duration-100 ease-in-out group-hover:scale-110"
            src="/assets/images/play-button.svg"
            alt="Play Introduction Video"
            width={100}
          />
        </div>
      </div>
    </section>
  );
};
