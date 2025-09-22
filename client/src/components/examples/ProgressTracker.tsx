import ProgressTracker from '../ProgressTracker';
import { GameProgress } from '@/data/quizData';

//todo: remove mock functionality
const mockProgress: GameProgress = {
  currentLevel: 3,
  levelScores: { 1: 18, 2: 14 },
  levelCompleted: { 1: true, 2: true },
  currentQuestion: 0
};

export default function ProgressTrackerExample() {
  return <ProgressTracker progress={mockProgress} />;
}