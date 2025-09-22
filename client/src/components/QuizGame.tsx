import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Level, Question } from '@/data/quizData';
import { ArrowLeft, Check, X } from 'lucide-react';
import CelebrationAnimation from '@/components/CelebrationAnimation';
import { useSound } from '@/hooks/useSound';

interface QuizGameProps {
  level: Level;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export default function QuizGame({ level, onComplete, onBack }: QuizGameProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [shake, setShake] = useState(false);
  
  const { playSuccessSound, playErrorSound } = useSound();

  const currentQuestion = level.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / level.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setShowCelebration(true);
      playSuccessSound(); // Play success sound for correct answer
      setTimeout(() => setShowCelebration(false), 2000);
    } else {
      setShake(true);
      playErrorSound(); // Play error sound for wrong answer
      setTimeout(() => setShake(false), 600);
    }

    // Move to next question or complete quiz
    setTimeout(() => {
      if (currentQuestionIndex + 1 < level.questions.length) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        onComplete(score + (isCorrect ? 1 : 0));
      }
    }, 2000);
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={onBack}
            data-testid="button-back-to-levels"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Levels
          </Button>
          
          <Badge variant="secondary" className="text-sm">
            Level {level.id}: {level.title}
          </Badge>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestionIndex + 1} of {level.questions.length}</span>
            <span>Score: {score}/{level.questions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className={shake ? 'animate-bounce' : ''}
        >
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <AnimatePresence>
                {currentQuestion.options.map((option, index) => {
                  let buttonVariant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";
                  let showIcon = null;
                  
                  if (showResult) {
                    if (index === currentQuestion.correctAnswer) {
                      buttonVariant = "default";
                      showIcon = <Check className="ml-2 h-4 w-4" />;
                    } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                      buttonVariant = "destructive";
                      showIcon = <X className="ml-2 h-4 w-4" />;
                    }
                  } else if (selectedAnswer === index) {
                    buttonVariant = "secondary";
                  }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant={buttonVariant}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className="w-full justify-start text-left p-4 h-auto min-h-[3rem] relative"
                        data-testid={`button-answer-${index}`}
                      >
                        <span className="flex-grow">{option}</span>
                        {showIcon}
                      </Button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Celebration Animation */}
        <AnimatePresence>
          {showCelebration && (
            <CelebrationAnimation />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}