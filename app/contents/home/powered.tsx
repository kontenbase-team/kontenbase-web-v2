import { Anchor, useTheme } from "~/components";

export const HomePowered = () => {
  const { isLight } = useTheme();
  const mode = isLight ? "light" : "dark";

  return (
    <section className="stack-v mb-10 items-center">
      <h2 className="m-0">Powered by</h2>
      <div>
        <Anchor className="filter-dim block" href="https://idcloudhost.com/en">
          <img
            src={`/assets/images/partners/idcloudhost/idcloudhost-h-${mode}.png`}
            alt="IdCloudHost"
            className="max-h-[105px] max-w-[300px] sm:max-h-[210px] sm:max-w-[600px]"
          />
        </Anchor>
      </div>
    </section>
  );
};
