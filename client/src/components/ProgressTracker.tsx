import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Trophy } from 'lucide-react';
import { GameProgress } from '@/data/quizData';

interface ProgressTrackerProps {
  progress: GameProgress;
}

export default function ProgressTracker({ progress }: ProgressTrackerProps) {
  const completedLevels = Object.keys(progress.levelCompleted).filter(
    level => progress.levelCompleted[parseInt(level)]
  ).length;

  const totalScore = Object.values(progress.levelScores).reduce((sum, score) => sum + score, 0);
  const maxPossibleScore = 80; // Total questions across all levels: 20+17+15+15+13

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Trophy className="h-5 w-5 text-primary" />
            Your Progress
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{completedLevels}/5</div>
              <div className="text-sm text-muted-foreground">Levels Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-2">{totalScore}/{maxPossibleScore}</div>
              <div className="text-sm text-muted-foreground">Total Score</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-4">
                {maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0}%
              </div>
              <div className="text-sm text-muted-foreground">Overall Accuracy</div>
            </div>
          </div>

          {/* Level completion status */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-muted-foreground mb-3">Level Status:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((levelId) => {
                const isCompleted = progress.levelCompleted[levelId];
                const score = progress.levelScores[levelId];
                
                return (
                  <motion.div
                    key={levelId}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: levelId * 0.1 }}
                  >
                    <Badge 
                      variant={isCompleted ? "default" : "secondary"}
                      className="w-full justify-center py-2 text-xs"
                    >
                      <div className="flex items-center gap-1">
                        {isCompleted ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : (
                          <Circle className="h-3 w-3" />
                        )}
                        <span>Level {levelId}</span>
                        {isCompleted && score !== undefined && (
                          <span className="ml-1 text-xs opacity-90">
                            ({score})
                          </span>
                        )}
                      </div>
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}