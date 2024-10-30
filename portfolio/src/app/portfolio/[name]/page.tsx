import PortfolioDetails from "@/app/ui/portfolio-details";

export default function Portfolio( {params} : { params: { name: string } }) {
  return <PortfolioDetails params={params.name} />;
}
