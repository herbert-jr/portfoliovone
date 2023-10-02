import { PortfolioProvider } from "./porfolioContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <PortfolioProvider>{children}</PortfolioProvider>;
};
