import { useState, useEffect } from 'react';
import { GameProgress, STORAGE_KEY } from '@/data/quizData';

const initialProgress: GameProgress = {
  currentLevel: 1,
  levelScores: {},
  levelCompleted: {},
  currentQuestion: 0
};

export function useGameProgress() {
  const [progress, setProgress] = useState<GameProgress>(initialProgress);

  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Failed to parse saved progress:', error);
        setProgress(initialProgress);
      }
    }
  }, []);

  const saveProgress = (newProgress: GameProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const completeLevel = (levelId: number, score: number) => {
    const newProgress = {
      ...progress,
      levelCompleted: { ...progress.levelCompleted, [levelId]: true },
      levelScores: { ...progress.levelScores, [levelId]: score },
      currentLevel: Math.max(progress.currentLevel, levelId + 1),
      currentQuestion: 0
    };
    saveProgress(newProgress);
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(initialProgress);
  };

  const isLevelUnlocked = (levelId: number) => {
    if (levelId === 1) return true;
    return progress.levelCompleted[levelId - 1] === true;
  };

  return {
    progress,
    completeLevel,
    resetProgress,
    isLevelUnlocked,
    saveProgress
  };
}