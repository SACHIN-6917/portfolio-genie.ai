import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialRegistrationButton = ({ 
  provider, 
  icon, 
  onClick, 
  disabled = false 
}) => {
  const getProviderStyles = () => {
    switch (provider?.toLowerCase()) {
      case 'google':
        return 'border-red-200 hover:border-red-300 hover:bg-red-50 text-red-700';
      case 'linkedin':
        return 'border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700';
      default:
        return 'border-border hover:border-primary/50 hover:bg-muted/50';
    }
  };

  return (
    <Button
      variant="outline"
      fullWidth
      onClick={onClick}
      disabled={disabled}
      className={`h-12 ${getProviderStyles()}`}
    >
      <div className="flex items-center justify-center space-x-3">
        <Icon name={icon} size={20} />
        <span className="font-medium">Continue with {provider}</span>
      </div>
    </Button>
  );
};

export default SocialRegistrationButton;