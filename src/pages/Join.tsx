import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PillarSelection } from "@/components/join/PillarSelection";
import { OpenSourceForm } from "@/components/join/OpenSourceForm";
import { TechnocracyForm } from "@/components/join/TechnocracyForm";
import { ProsperityForm } from "@/components/join/ProsperityForm";

export type Pillar = "capitalism" | "democracy" | "prosperity";

const Join = () => {
  const [searchParams] = useSearchParams();
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  // Support direct pillar navigation via query params
  useEffect(() => {
    const pillarParam = searchParams.get("pillar");
    if (pillarParam && ["capitalism", "democracy", "prosperity"].includes(pillarParam)) {
      setSelectedPillar(pillarParam as Pillar);
      setStep(2);
    }
  }, [searchParams]);

  const handlePillarSelect = (pillar: Pillar) => {
    setSelectedPillar(pillar);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedPillar(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-heading font-bold">The New Balance</span>
          </Link>
          {step === 2 && (
            <button
              onClick={handleBack}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all options
            </button>
          )}
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4 max-w-md">
            <div className={`flex items-center gap-2 ${step === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold ${step === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                1
              </div>
              <span className="text-sm font-medium">Choose Path</span>
            </div>
            <div className={`h-px flex-1 ${step === 2 ? 'bg-primary' : 'bg-border'}`} />
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold ${step === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                2
              </div>
              <span className="text-sm font-medium">Contribute</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {step === 1 && <PillarSelection onSelect={handlePillarSelect} />}
        {step === 2 && selectedPillar === "capitalism" && <OpenSourceForm onBack={handleBack} />}
        {step === 2 && selectedPillar === "democracy" && <TechnocracyForm onBack={handleBack} />}
        {step === 2 && selectedPillar === "prosperity" && <ProsperityForm onBack={handleBack} />}
      </main>
    </div>
  );
};

export default Join;
