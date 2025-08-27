import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { label: 'Account Info', icon: 'User' },
    { label: 'User Type', icon: 'Users' },
    { label: 'Complete', icon: 'CheckCircle' }
  ];

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-6">
      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-4">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-all duration-200 ${
              index <= currentStep
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {index < currentStep ? (
                <Icon name="Check" size={14} />
              ) : (
                <Icon name={step?.icon} size={14} />
              )}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${
              index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {step?.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;