import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'framer-motion';
import CelebrationAnimation from '../CelebrationAnimation';

export default function CelebrationAnimationExample() {
  const [showCelebration, setShowCelebration] = useState(false);

  const triggerCelebration = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Button onClick={triggerCelebration} data-testid="button-trigger-celebration">
        Trigger Celebration
      </Button>
      
      <AnimatePresence>
        {showCelebration && <CelebrationAnimation />}
      </AnimatePresence>
    </div>
  );
}