import { ButtonAnchor, ButtonGroup } from "~/components";

export const HomeIntro = () => {
  return (
    <section className="stack-v items-center gap-10">
      <div className="layout-content small md:medium">
        <h1 className="m-0 flex flex-wrap justify-center text-center text-4xl md:text-6xl md:leading-normal">
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

      <ButtonGroup size="lg">
        <ButtonAnchor href="/signup">Sign Up for Free</ButtonAnchor>
        <ButtonAnchor variant="outline" href="/demo">
          Schedule Demo
        </ButtonAnchor>
      </ButtonGroup>
    </section>
  );
};
