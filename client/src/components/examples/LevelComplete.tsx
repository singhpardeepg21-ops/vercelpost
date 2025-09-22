import LevelComplete from '../LevelComplete';
import { quizLevels } from '@/data/quizData';

export default function LevelCompleteExample() {
  const handlePlayAgain = () => {
    console.log('Play again triggered');
  };

  const handleBackToHome = () => {
    console.log('Back to home triggered');
  };

  return (
    <LevelComplete 
      level={quizLevels[0]} 
      score={16} 
      onPlayAgain={handlePlayAgain}
      onBackToHome={handleBackToHome}
    />
  );
}