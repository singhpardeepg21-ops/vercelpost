import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import LevelCard from '@/components/LevelCard';
import ProgressTracker from '@/components/ProgressTracker';
import QuizGame from '@/components/QuizGame';
import LevelComplete from '@/components/LevelComplete';
import { Button } from '@/components/ui/button';
import { useGameProgress } from '@/hooks/useGameProgress';
import { quizLevels, Level } from '@/data/quizData';
import { RotateCcw } from 'lucide-react';

type GameState = 'home' | 'playing' | 'completed';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>('home');
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [levelScore, setLevelScore] = useState(0);
  
  const { progress, completeLevel, resetProgress, isLevelUnlocked } = useGameProgress();

  const handlePlayLevel = (level: Level) => {
    setCurrentLevel(level);
    setGameState('playing');
  };

  const handleLevelComplete = (score: number) => {
    if (currentLevel) {
      completeLevel(currentLevel.id, score);
      setLevelScore(score);
      setGameState('completed');
    }
  };

  const handlePlayAgain = () => {
    if (currentLevel) {
      setGameState('playing');
    }
  };

  const handleBackToHome = () => {
    setGameState('home');
    setCurrentLevel(null);
    setLevelScore(0);
  };

  const handleResetProgress = () => {
    resetProgress();
  };

  if (gameState === 'playing' && currentLevel) {
    return (
      <QuizGame
        level={currentLevel}
        onComplete={handleLevelComplete}
        onBack={handleBackToHome}
      />
    );
  }

  if (gameState === 'completed' && currentLevel) {
    return (
      <LevelComplete
        level={currentLevel}
        score={levelScore}
        onPlayAgain={handlePlayAgain}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-golden-gradient">
      {/* Top Branding Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-8 pb-4"
      >
        <h1 className="text-2xl md:text-3xl font-bold shimmer drop-shadow-lg" 
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          ✨ King $ Studio: Founder Pardeep Singh ✨
        </h1>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center pb-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-md">
          🏆 Sikh Quiz History 🏆
        </h2>
        <p className="text-lg md:text-xl text-foreground/90 mt-4 font-medium">
          Test your knowledge across 5 progressive levels
        </p>
      </motion.div>
      
      <div className="container mx-auto px-4 pb-8">
        <ProgressTracker progress={progress} />
        
        {/* Reset Progress Button */}
        <div className="flex justify-end mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleResetProgress}
            className="glow-gold"
            data-testid="button-reset-progress"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Progress
          </Button>
        </div>

        {/* Level Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quizLevels.map((level) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * level.id }}
              whileHover={{ scale: 1.02 }}
              className="glow-gold rounded-lg"
            >
              <LevelCard
                level={level}
                isUnlocked={isLevelUnlocked(level.id)}
                isCompleted={progress.levelCompleted[level.id] || false}
                score={progress.levelScores[level.id]}
                onPlay={() => handlePlayLevel(level)}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}