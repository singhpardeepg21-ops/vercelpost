import QuizGame from '../QuizGame';
import { quizLevels } from '@/data/quizData';

export default function QuizGameExample() {
  const handleComplete = (score: number) => {
    console.log('Quiz completed with score:', score);
  };

  const handleBack = () => {
    console.log('Back to levels triggered');
  };

  return (
    <QuizGame 
      level={quizLevels[0]} 
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
}