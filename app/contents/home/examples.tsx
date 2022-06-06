import { Avatar, ButtonAnchor, ButtonGroup, IconSpan } from "~/components";
import { dataExamples } from "~/data";

export const HomeExamples = () => {
  return (
    <section className="stack-v-center layout-padding gap-10">
      <div className="stack-v-center text-center">
        <h1>
          What can you build with{" "}
          <span className="text-primary-500">Kontenbase</span>?
        </h1>

        <p className="text-dim max-w-3xl text-xl">
          Kontenbase can be used to build any app! Seriously, anything! Here
          some example that you can clone and try.
        </p>
      </div>

      <Examples />
    </section>
  );
};

export const Examples = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {dataExamples.map((example) => {
        return <ExampleItem key={example.name} example={example} />;
      })}
    </div>
  );
};

interface ExampleItemProps {
  example: any;
}

export const ExampleItem = ({ example }: ExampleItemProps) => {
  return (
    <div className="shadow-secondary bg-secondary border-panel stack-v gap-3 rounded-base p-5">
      <div className="stack-v flex-[1] gap-3">
        <h3 className="m-0">{example.name}</h3>
        <p className="text-sm">{example.description}</p>
      </div>

      <div className="stack-v gap-5">
        <div className="stack-h gap-3 font-bold">
          <p>Created by</p>
          <div className="stack-h gap-3">
            <Avatar src={example.creatorAvatarUrl} name={example.creatorName} />
            <p>{example.creatorName}</p>
          </div>
        </div>
        <ButtonGroup>
          {example.demoUrl && (
            <ButtonAnchor
              href={example.demoUrl}
              rightIcon={<IconSpan name="arrow-right" className="ml-3" />}
            >
              Try Demo
            </ButtonAnchor>
          )}
          {example.githubUrl && (
            <ButtonAnchor
              variant="outline"
              color="null"
              href={example.githubUrl}
              rightIcon={<IconSpan name="github" className="ml-3" />}
            >
              View Source
            </ButtonAnchor>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
};
