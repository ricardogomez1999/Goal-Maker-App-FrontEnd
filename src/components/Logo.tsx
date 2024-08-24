type LogoTypeProps = {
  logoType: number;
};

export default function Logo({ logoType }: LogoTypeProps) {
  return <img src={`/logo${logoType}.svg`} alt="App logo" />;
}
