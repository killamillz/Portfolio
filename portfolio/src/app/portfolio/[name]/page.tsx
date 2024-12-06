/* eslint-disable @typescript-eslint/no-explicit-any */
import PortfolioDetails from "@/app/ui/portfolio-details";

export default async function Portfolio({ params }: any) {
  const { name } = await Promise.resolve(params); // Ensure `params` is awaited
  return <PortfolioDetails name={name} />;
}
