import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DaedalusHero } from "@/components/daedalus/DaedalusHero";
import { Introduction } from "@/components/daedalus/Introduction";
import { ModuleSection } from "@/components/daedalus/ModuleSection";
import { Interconnection } from "@/components/daedalus/Interconnection";
import { FundingGoal } from "@/components/daedalus/FundingGoal";
import { VisionSection } from "@/components/daedalus/VisionSection";
import { CTASection } from "@/components/daedalus/CTASection";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const Daedalus = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <DaedalusHero />
      <Introduction />
      
      <ModuleSection
        id="agora"
        icon="🏛️"
        title="The Agora"
        subtitle="Transparent Public Finance Ledger"
        tagline="Implementing Technocratic Democracy"
        color="agora"
        purpose="Making all public spending traceable, auditable, and understandable to every citizen. Every public budget, contract, and algorithm must be open and verifiable."
        howItWorks={[
          "Government establishes secure digital treasury on blockchain",
          "All payments recorded as permanent, tamper-proof transactions",
          "AI assistant answers citizen questions in plain language",
          "Full transparency with linked contract documents and receipts"
        ]}
        technology="Built on Base blockchain for security and immutability, with AI that understands budget documents and answers questions like 'How much did we spend on road repairs this year?' in seconds."
        example={{
          title: "Maria's Infrastructure Project",
          oldWay: "$5M contract awarded, details buried in 200-page PDFs, citizens skeptical of actual spending",
          newWay: "Every payment on-chain with AI-powered explanations, complete transparency with verifiable receipts",
          advantage: "Maria asks 'Show me payment timeline' → instant visual answer with all supporting documents"
        }}
        advantages={[
          "Radical transparency in all public spending",
          "Instant access to spending details",
          "AI-powered plain language explanations",
          "Built on verifiable, tamper-proof data"
        ]}
      />

      <ModuleSection
        id="acorn"
        icon="🌰"
        title="The Acorn"
        subtitle="Cooperative Capital & Startup Fund"
        tagline="Seeding Open-Source Capitalism"
        color="acorn"
        purpose="Democratizing access to investment capital and allowing citizens to share in the prosperity they help create. The rewards must circulate through the community."
        howItWorks={[
          "Citizens contribute capital and receive Acorn tokens representing ownership",
          "Entrepreneurs submit project proposals with transparent terms",
          "AI analyzes proposals for fairness, feasibility, and bias removal",
          "Successful projects share revenue automatically with all token holders"
        ]}
        technology="Smart contracts ensure fair distribution of profits, AI removes bias from vetting process, and decentralized identity lets entrepreneurs build verifiable reputation across projects."
        example={{
          title: "Amir's Entrepreneur Journey",
          oldWay: "Great business idea, no wealthy connections, stuck seeking traditional loans with high barriers",
          newWay: "AI scores proposal highly on merit, community invests $50K collectively, Amir builds the business",
          advantage: "Dual benefit: Amir gets merit-based funding, citizens earn dividends from his success automatically"
        }}
        advantages={[
          "Access to capital based on merit, not connections",
          "Share in collective prosperity",
          "Automatic dividend distribution via smart contracts",
          "Build portable, verifiable reputation"
        ]}
      />

      <ModuleSection
        id="aegis"
        iconComponent={Shield}
        title="The Aegis"
        subtitle="Private & Verifiable Voting"
        tagline="Privacy Meets Democracy"
        color="aegis"
        purpose="Secure, transparent in integrity, completely private in execution. Leadership is a service. Privacy is a foundation of freedom."
        howItWorks={[
          "Eligible citizens receive secure voting credential via decentralized identity",
          "Vote privately using advanced cryptographic encryption",
          "Mathematical proof confirms vote validity without revealing identity or choice",
          "Final results publicly verifiable on-chain, individual votes remain completely private"
        ]}
        technology="Uses zero-knowledge proofs (ZK-SNARKs) - think of it as proving you voted without revealing what you voted for. Your privacy is mathematically guaranteed, not just promised."
        example={{
          title: "David & Sarah's Contentious Vote",
          oldWay: "Factory closure vote with accusations of fraud and intimidation, community divided and distrustful",
          newWay: "Everyone votes in complete privacy, results mathematically verified on blockchain, no dispute possible",
          advantage: "David and Sarah both vote according to their conscience in complete privacy, outcome accepted as legitimate by all"
        }}
        advantages={[
          "Complete privacy protection guaranteed by mathematics",
          "Mathematically verifiable, fraud-proof results",
          "No intimidation or external pressure",
          "Zero possibility of vote tampering"
        ]}
      />

      <Interconnection />
      <FundingGoal />
      <VisionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Daedalus;
