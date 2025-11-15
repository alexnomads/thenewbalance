export const Introduction = () => {
  return (
    <section id="introduction" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            MVP Architecture Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Not a single application, but an interconnected suite of three core modules built on a public blockchain and enhanced by privacy-preserving AI
          </p>
        </div>

        {/* Three interconnected modules visual */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold font-heading text-agora">The Agora</h3>
            <p className="text-muted-foreground">
              Transparent public finance ledger for radical accountability
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="h-1 w-full bg-gradient-to-r from-agora via-acorn to-aegis rounded"></div>
          </div>

          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🌰</div>
            <h3 className="text-2xl font-bold font-heading text-acorn">The Acorn</h3>
            <p className="text-muted-foreground">
              Cooperative capital fund for shared prosperity
            </p>
          </div>

          <div className="md:hidden flex items-center justify-center py-4">
            <div className="w-1 h-16 bg-gradient-to-b from-agora via-acorn to-aegis rounded"></div>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <div className="h-1 w-full bg-gradient-to-r from-acorn to-aegis rounded"></div>
          </div>

          <div className="md:col-start-2 text-center space-y-4">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-aegis/10 p-4 rounded-full">
                <svg className="h-12 w-12 text-aegis" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold font-heading text-aegis">The Aegis</h3>
            <p className="text-muted-foreground">
              Private voting system with verifiable integrity
            </p>
          </div>
        </div>

        {/* Key principles */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-background border border-border rounded-lg">
            <div className="text-primary text-2xl mb-2">🔗</div>
            <h4 className="font-bold mb-2">Blockchain Foundation</h4>
            <p className="text-sm text-muted-foreground">
              Built on Base L2 for security, transparency, and immutability
            </p>
          </div>
          <div className="p-6 bg-background border border-border rounded-lg">
            <div className="text-secondary text-2xl mb-2">🤖</div>
            <h4 className="font-bold mb-2">AI-Enhanced</h4>
            <p className="text-sm text-muted-foreground">
              Fine-tuned LLMs make complex data accessible to everyone
            </p>
          </div>
          <div className="p-6 bg-background border border-border rounded-lg">
            <div className="text-aegis text-2xl mb-2">🔐</div>
            <h4 className="font-bold mb-2">Privacy-Preserving</h4>
            <p className="text-sm text-muted-foreground">
              Zero-knowledge proofs ensure privacy without sacrificing verification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
