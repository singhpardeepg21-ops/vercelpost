import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, CheckCircle, Play } from 'lucide-react';
import { Level } from '@/data/quizData';

interface LevelCardProps {
  level: Level;
  isUnlocked: boolean;
  isCompleted: boolean;
  score?: number;
  onPlay: () => void;
}

export default function LevelCard({ level, isUnlocked, isCompleted, score, onPlay }: LevelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: level.id * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className={`relative overflow-hidden transition-all duration-300 border-primary/50 ${
        !isUnlocked ? 'opacity-60' : 'hover-elevate'
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-foreground">
              Level {level.id}: {level.title}
            </CardTitle>
            {isCompleted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <CheckCircle className="h-6 w-6 text-chart-2" />
              </motion.div>
            )}
            {!isUnlocked && <Lock className="h-5 w-5 text-muted-foreground" />}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {level.description}
          </p>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {level.totalQuestions} Questions
            </Badge>
            
            {isCompleted && score !== undefined && (
              <Badge variant="default" className="bg-chart-2 hover:bg-chart-2/90">
                Score: {score}/{level.totalQuestions}
              </Badge>
            )}
          </div>
          
          <Button 
            onClick={onPlay}
            disabled={!isUnlocked}
            className="w-full mt-4"
            data-testid={`button-play-level-${level.id}`}
          >
            {!isUnlocked ? (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Locked
              </>
            ) : isCompleted ? (
              <>
                <Play className="mr-2 h-4 w-4" />
                Play Again
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start Level
              </>
            )}
          </Button>
        </CardContent>
        
        {/* Gradient overlay for locked levels */}
        {!isUnlocked && (
          <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30 pointer-events-none" />
        )}
      </Card>
    </motion.div>
  );
}