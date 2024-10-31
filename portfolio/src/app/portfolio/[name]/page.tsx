import PortfolioDetails from "@/app/ui/portfolio-details";
import { PortfolioDetailsProps } from "@/app/model/portfolio";

export default async function Portfolio({ params }: PortfolioDetailsProps) {
  const { name } = await params;

  return <PortfolioDetails name={name} />;
}
