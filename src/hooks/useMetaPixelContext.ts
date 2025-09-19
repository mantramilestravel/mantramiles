import { useContext } from 'react';
import { MetaPixelContext, MetaPixelContextType } from '../contexts/MetaPixelContextDefinition';

// Hook to use the Meta Pixel context
export const useMetaPixelContext = (): MetaPixelContextType => {
  const context = useContext(MetaPixelContext);
  if (!context) {
    throw new Error('useMetaPixelContext must be used within a MetaPixelProvider');
  }
  return context;
};