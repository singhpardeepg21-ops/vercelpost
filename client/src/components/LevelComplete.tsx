import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, RotateCcw, Home } from 'lucide-react';
import { Level } from '@/data/quizData';

interface LevelCompleteProps {
  level: Level;
  score: number;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

export default function LevelComplete({ level, score, onPlayAgain, onBackToHome }: LevelCompleteProps) {
  const percentage = Math.round((score / level.totalQuestions) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60;

  const getPerformanceMessage = () => {
    if (isExcellent) return "Outstanding! 🌟";
    if (isGood) return "Well Done! 👍";
    return "Keep Learning! 📚";
  };

  const getPerformanceColor = () => {
    if (isExcellent) return "text-primary";
    if (isGood) return "text-chart-2";
    return "text-chart-4";
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
      >
        <Card className="text-center overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
          
          <CardHeader className="relative pb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <Trophy className="h-16 w-16 text-primary" />
            </motion.div>
            
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Level {level.id} Complete!
            </CardTitle>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl font-semibold ${getPerformanceColor()}`}
            >
              {getPerformanceMessage()}
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6 relative">
            {/* Score display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex justify-center items-center space-x-4">
                <Badge variant="default" className="text-lg px-4 py-2 bg-primary">
                  Score: {score}/{level.totalQuestions}
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {percentage}%
                </Badge>
              </div>

              {/* Stars based on performance */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center space-x-2"
              >
                {[1, 2, 3].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.6 + (star * 0.1), 
                      type: 'spring',
                      stiffness: 200 
                    }}
                  >
                    <Star 
                      className={`h-8 w-8 ${
                        star === 1 ? 'text-primary fill-primary' :
                        star === 2 && percentage >= 60 ? 'text-primary fill-primary' :
                        star === 3 && percentage >= 80 ? 'text-primary fill-primary' :
                        'text-muted-foreground'
                      }`}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Level info */}
              <div className="text-muted-foreground">
                <p className="font-medium">{level.title}</p>
                <p className="text-sm">{level.description}</p>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Button 
                onClick={onPlayAgain}
                variant="outline"
                className="flex-1"
                data-testid="button-play-again"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Play Again
              </Button>
              
              <Button 
                onClick={onBackToHome}
                className="flex-1"
                data-testid="button-back-home"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Levels
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}