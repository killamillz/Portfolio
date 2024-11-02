/* eslint-disable @typescript-eslint/no-explicit-any */
import PortfolioDetails from "@/app/ui/portfolio-details";

export default function Portfolio({ params }: any) {
  return <PortfolioDetails name={params?.name} />;
}
