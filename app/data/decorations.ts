const backgroundYellow =
  "radial-gradient(140% 73% at 50% 22%, #FFD43E 0%, #f03e3e 100%)";
const backgroundGray =
  "radial-gradient(140% 73% at 50% 22%, #888888 0%, #0d0d0d 100%)";

const shadowYellow = "0 0 50px 10px hsla(50,100%,50%,0.5)";
const shadowGray = "0 0 30px 10px hsla(250,50%,15%,0.25)";

export const decorationData = [
  {
    top: -20,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 40,
    background: backgroundYellow,
  },
  {
    bottom: 50,
    right: -50,
    width: 80,
    height: 80,
    borderRadius: 80,
    background: backgroundYellow,
    boxShadow: shadowYellow,
  },
  {
    top: -10,
    left: -80,
    width: 100,
    height: 100,
    borderRadius: 100,
    background: backgroundYellow,
    boxShadow: shadowYellow,
  },
  {
    top: 250,
    left: -150,
    width: 50,
    height: 50,
    background: backgroundGray,
    borderRadius: 50,
  },
  {
    top: 100,
    right: -120,
    width: 75,
    height: 75,
    borderRadius: 75,
    background: backgroundGray,
    boxShadow: shadowGray,
  },
  {
    left: -75,
    bottom: -50,
    width: 150,
    height: 150,
    borderRadius: 150,
    background: backgroundGray,
    boxShadow: shadowGray,
  },
];
