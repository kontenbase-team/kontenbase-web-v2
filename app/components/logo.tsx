import { useTheme } from "~/components";
import { classx } from "~/utils";

export const Logo = () => {
  const { isLight } = useTheme();

  const logoImageUrl = isLight
    ? "/assets/images/kontenbase-on-light.png"
    : "/assets/images/kontenbase-on-dark.png";

  return (
    <div
      className={classx(
        "flex items-center transition-[opacity] duration-300 hover:opacity-80",
      )}
    >
      <img
        className="h-[30px] sm:h-[40px]"
        src={logoImageUrl}
        alt="Kontenbase"
      />
    </div>
  );
};
