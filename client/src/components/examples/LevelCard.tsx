import LevelCard from '../LevelCard';
import { quizLevels } from '@/data/quizData';

export default function LevelCardExample() {
  const handlePlay = () => {
    console.log('Play level triggered');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <LevelCard 
        level={quizLevels[0]} 
        isUnlocked={true} 
        isCompleted={false} 
        onPlay={handlePlay}
      />
      <LevelCard 
        level={quizLevels[1]} 
        isUnlocked={true} 
        isCompleted={true} 
        score={15}
        onPlay={handlePlay}
      />
      <LevelCard 
        level={quizLevels[2]} 
        isUnlocked={false} 
        isCompleted={false} 
        onPlay={handlePlay}
      />
    </div>
  );
}