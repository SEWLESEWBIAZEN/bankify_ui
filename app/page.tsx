import { Metadata } from "next";
import PageContent from "./_components/layout/pageContent";

export const metadata: Metadata = {
  title: "Bankify | SewLabs",
  description: "Bankify is a digital banking solution that simplifies banking and transactions for individuals and businesses.",
  keywords: ["bankify", "bank", "financial", "services", "system"],
};

export default function Home() {
  return (
    <PageContent>
    <div >
      <h1>Welcome to Bankify</h1>
      <p>Your digital banking solution.</p>
    </div>
    </PageContent>
  );
}

