import { ButtonGroupCTA } from "~/contents";

export const HomeIntro = () => {
  return (
    <section className="stack-v layout-padding items-center gap-10">
      <div className="layout-content small md:medium">
        <h1 className="h0 special">
          <span>
            <span className="text-primary-500">No Code</span>
            <span> Backend API,</span>
          </span>
          <span>Fast and Easy!</span>
        </h1>
      </div>

      <div className="layout-content small">
        <p className="text-center text-xl">
          Kontenbase allows you to easily create backend API, auth, and storage
          in less than one minute without coding.
        </p>
      </div>

      <ButtonGroupCTA className="justify-center" />
    </section>
  );
};
