'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronRight, CheckCircle, Circle, Play, Pause } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface Step {
  id: string;
  title: string;
  description?: string;
  content?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  completed?: boolean;
  optional?: boolean;
}

interface SequentialModuleProps {
  title?: string;
  description?: string;
  steps: Step[];
  variant?: 'vertical' | 'horizontal' | 'accordion';
  showProgress?: boolean;
  showNumbers?: boolean;
  allowSkip?: boolean;
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SequentialModule({
  title,
  description,
  steps,
  variant = 'vertical',
  showProgress = true,
  showNumbers = true,
  allowSkip = false,
  autoAdvance = false,
  autoAdvanceDelay = 3000,
  theme = 'default',
  className
}: SequentialModuleProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoAdvance);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const markStepCompleted = (stepIndex: number) => {
    setCompletedSteps(prev => new Set([...prev, stepIndex]));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-advance functionality
  React.useEffect(() => {
    if (!isAutoPlaying || currentStep >= steps.length - 1) return;

    const timer = setTimeout(() => {
      nextStep();
    }, autoAdvanceDelay);

    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentStep, autoAdvanceDelay, steps.length]);

  const renderStepIcon = (stepIndex: number, step: Step) => {
    if (completedSteps.has(stepIndex)) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    
    if (stepIndex === currentStep) {
      return <Circle className="w-6 h-6 text-primary fill-primary" />;
    }
    
    return <Circle className="w-6 h-6 text-muted-foreground" />;
  };

  const renderVerticalSteps = () => (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      {/* Steps List */}
      <div className="space-y-4 mb-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={cn(
              "flex items-start gap-4 p-4 rounded-lg border transition-all",
              index === currentStep 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/50"
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Step Icon */}
            <div className="flex-shrink-0 mt-1">
              {showNumbers ? (
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  index === currentStep 
                    ? "bg-primary text-primary-foreground" 
                    : completedSteps.has(index)
                    ? "bg-green-500 text-white"
                    : "bg-muted text-muted-foreground"
                )}>
                  {completedSteps.has(index) ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
              ) : (
                renderStepIcon(index, step)
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-headline text-lg font-semibold">
                  {step.title}
                </h3>
                {step.optional && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    Optional
                  </span>
                )}
              </div>
              
              {step.description && (
                <p className="text-muted-foreground mb-3">
                  {step.description}
                </p>
              )}

              {index === currentStep && step.content && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="prose prose-sm max-w-none"
                >
                  <p>{step.content}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={cn(
            "px-4 py-2 rounded-lg font-medium transition-colors",
            currentStep === 0
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          Previous
        </button>

        <div className="flex items-center gap-2">
          {autoAdvance && (
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {allowSkip && currentStep < steps.length - 1 && (
            <button
              onClick={nextStep}
              className="px-4 py-2 rounded-lg font-medium border border-border hover:bg-muted transition-colors"
            >
              Skip
            </button>
          )}
          
          <button
            onClick={() => {
              markStepCompleted(currentStep);
              nextStep();
            }}
            disabled={currentStep >= steps.length - 1}
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-colors",
              currentStep >= steps.length - 1
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {currentStep >= steps.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );

  const renderHorizontalSteps = () => (
    <div className="max-w-6xl mx-auto">
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      {/* Steps Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                index === currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {showNumbers && (
                <span className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </span>
              )}
              <span className="text-sm font-medium">{step.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-3xl mx-auto">
            {steps[currentStep].image && (
              <div className="mb-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <LazyImage
                    src={steps[currentStep].image!.src}
                    alt={steps[currentStep].image!.alt}
                    className="w-full h-full"
                    imageClassName="object-cover"
                    data-ai-hint={steps[currentStep].image!.hint}
                    fill
                  />
                </div>
              </div>
            )}

            <h3 className="font-headline text-2xl font-semibold mb-4">
              {steps[currentStep].title}
            </h3>

            {steps[currentStep].description && (
              <p className="text-muted-foreground text-lg mb-6">
                {steps[currentStep].description}
              </p>
            )}

            {steps[currentStep].content && (
              <div className="prose prose-lg max-w-none text-left">
                <p>{steps[currentStep].content}</p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={cn(
            "px-6 py-2 rounded-lg font-medium transition-colors",
            currentStep === 0
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          Previous
        </button>

        <button
          onClick={() => {
            markStepCompleted(currentStep);
            nextStep();
          }}
          disabled={currentStep >= steps.length - 1}
          className={cn(
            "px-6 py-2 rounded-lg font-medium transition-colors",
            currentStep >= steps.length - 1
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {currentStep >= steps.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'horizontal':
        return renderHorizontalSteps();
      case 'accordion':
        return renderVerticalSteps(); // Simplified accordion for now
      default:
        return renderVerticalSteps();
    }
  };

  return (
    <motion.section 
      className={cn(
        "py-16 md:py-24",
        themeClasses[theme],
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
          {title && (
            <ComponentHeader 
              title={title} 
              description={description}
              className="mb-12"
            />
          )}

          {renderContent()}
        </div>
      </div>
    </motion.section>
  );
}
