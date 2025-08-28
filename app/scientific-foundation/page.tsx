// app/scientific-foundation/page.tsx
import type { Metadata } from 'next';
import EvidencePage from '../evidence/page';

export const metadata: Metadata = {
  title: 'Scientific Foundation — Good2Go',
  description:
    'Peer-reviewed evidence and dual-task gait analysis supporting Good2Go’s concussion recovery monitoring.',
};

export default function ScientificFoundationPage() {
  // Reuse the Evidence page UI
  return <EvidencePage />;
}
