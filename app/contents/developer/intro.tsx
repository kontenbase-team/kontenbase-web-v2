import { ButtonGroupCTA } from "~/contents";

export const DeveloperHomeIntro = () => {
  return (
    <section className="stack-v layout-padding items-center gap-10">
      <div className="layout-content small md:medium flex justify-center">
        <h1 className="h0 special max-w-[415px] text-center sm:max-w-[680px]">
          <span className="text-primary-500">No Code </span>
          Backend API, Fast and Easy!
        </h1>
      </div>

      <div className="layout-content small">
        <p className="text-center text-lg sm:text-xl">
          Kontenbase allows you to easily create backend API, auth, and storage
          in less than one minute without coding.
        </p>
      </div>

      <ButtonGroupCTA className="justify-center" />
    </section>
  );
};
