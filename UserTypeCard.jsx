import React from 'react';
import Icon from '../../../components/AppIcon';

const UserTypeCard = ({ 
  type, 
  icon, 
  title, 
  description, 
  isSelected, 
  onClick 
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(type)}
      className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left hover-lift ${
        isSelected
          ? 'border-primary bg-primary/5 shadow-md'
          : 'border-border bg-card hover:border-primary/50 hover:bg-muted/50'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
          isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
        }`}>
          <Icon name={icon} size={20} />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold text-sm ${
            isSelected ? 'text-primary' : 'text-foreground'
          }`}>
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        </div>
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          isSelected 
            ? 'border-primary bg-primary' :'border-muted-foreground/30'
        }`}>
          {isSelected && (
            <div className="w-2 h-2 rounded-full bg-primary-foreground" />
          )}
        </div>
      </div>
    </button>
  );
};

export default UserTypeCard;