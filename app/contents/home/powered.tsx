import { useTheme } from "~/components";

export const HomePowered = () => {
  const { isLight } = useTheme();
  const mode = isLight ? "light" : "dark";

  return (
    <section className="stack-v items-center">
      <h2 className="m-0">Powered by</h2>
      <div>
        <img
          src={`/assets/images/partners/idcloudhost/idcloudhost-h-${mode}.png`}
          alt="IdCloudHost"
          className="filter-gray max-h-[156px] max-w-[450px] sm:max-h-[210px] sm:max-w-[600px]"
        />
      </div>
    </section>
  );
};
