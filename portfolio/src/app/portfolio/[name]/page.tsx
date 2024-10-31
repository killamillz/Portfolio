import PortfolioDetails from "@/app/ui/portfolio-details";
// import { PortfolioDetailsProps } from "@/app/model/portfolio";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Portfolio({ params }: any) {
  return <PortfolioDetails name={params.name} />;
}
