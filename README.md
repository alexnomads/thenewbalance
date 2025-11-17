<b>Project Daedalus</b>

Privacy-preserving voting, polling, and integrity verification powered by zero-knowledge proofs and zkVerify.

<b>Overview</b>

Aegis is a web application that lets any organization run private, verifiable votes without exposing voter identities or choices. It delivers a simple web experience while relying on modern proving systems zK technology for fast, low-cost proof validation.

Aegis is the first module of Project Daedalus, a suite of open-source civic tools that includes:

The Agora — transparent public finance ledger

The Acorn — cooperative capital fund

The Aegis — private voting and reputation integrity

This repository hosts the Aegis codebase and integration with zkVerify.

<b>Why Aegis</b>

Traditional digital voting tools expose identity or trust assumptions. Aegis uses ZKPs to show eligibility and single-use voting without revealing who voted or how. zkVerify serves as the verification layer, removing the high cost and slow performance of general-purpose L1 verification.

<b>Key benefits:</b>

Private, tamper-resistant voting

One-person-one-vote without identity leakage

No blockchain friction for users

Scalable proof validation via zkVerify’s Verifier Pallets

Proof receipts published to a settlement chain (e.g., Base) for public auditability

<b>How it Works</b>

Admin Setup: Create a vote and upload a list of eligible voter emails.

User Access: Each voter receives a unique single-use link.

Proof Generation: The browser generates a ZKP confirming eligibility and first-time participation.

Submission: The encrypted vote and proof are sent through the backend to zkVerify via the zkVerifyJS SDK.

Verification: zkVerify validates the proof through the appropriate Verifier Pallet.

Attestation: Aggregated proof receipts are posted to a settlement chain for open verification.

<b>Vision</b>

Daedalus aims to modernize civic participation by combining privacy, transparency, and shared digital ownership. Aegis is the first step toward trustworthy, accessible democratic tools powered by open-source infrastructure.

<b>Contributing</b>

Issues and pull requests are welcome. Documentation and code are fully open for community reuse.
