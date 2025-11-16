export const TheIdea = () => {
  return (
    <section className="relative py-24 px-6 bg-card overflow-hidden">
      {/* Small geometric accents */}
      <div className="absolute top-10 right-10 w-16 h-16 border-2 border-primary/20 rotate-45" />
      <div className="absolute bottom-10 left-10 w-12 h-12 bg-secondary/10" />
      
      {/* Subtle circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--secondary))" strokeWidth="1" />
        <circle cx="10%" cy="50%" r="3" fill="hsl(var(--primary))" />
        <circle cx="90%" cy="50%" r="3" fill="hsl(var(--primary))" />
      </svg>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading text-secondary">
          We're not left or right. We're <span className="text-primary">forward</span>.
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            The systems that built the modern world are now breaking it. Capitalism without 
            conscience widens inequality. Bureaucracy without creativity blocks innovation. 
            Democracy without competence breeds chaos.
          </p>
          
          <p className="text-2xl font-semibold text-secondary pt-4">
            It's time for balance.
          </p>
          
          <p>
            A world where innovation, fairness, and freedom reinforce one another — not cancel 
            each other out.
          </p>
        </div>
      </div>
    </section>
  );
};