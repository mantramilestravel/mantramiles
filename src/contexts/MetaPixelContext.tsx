import React, { useEffect, useState, ReactNode } from 'react';
import { X } from 'lucide-react';
import MetaPixelService, { initializeMetaPixel } from '../services/metaPixel';
import { MetaPixelConfig } from '../types/metaPixel';
import { MetaPixelContext, MetaPixelContextType } from './MetaPixelContextDefinition';

interface MetaPixelProviderProps {
  children: ReactNode;
  autoInitialize?: boolean;
  config?: Partial<MetaPixelConfig>;
}

// Default configuration
const getDefaultConfig = (): Partial<MetaPixelConfig> => {
  return {
    pixelId: import.meta.env.VITE_META_PIXEL_ID || '',
    accessToken: import.meta.env.VITE_META_PIXEL_TOKEN || '',
    apiVersion: 'v18.0',
    enableLogging: import.meta.env.DEV || false,
    testEventCode: import.meta.env.VITE_META_PIXEL_TEST_CODE
  };
};

// Check if user has dismissed the notice
const hasNoticeDismissed = (): boolean => {
  const dismissed = localStorage.getItem('meta-pixel-notice-dismissed');
  return dismissed === 'true';
};

// Set notice as dismissed
const setNoticeDismissed = (): void => {
  localStorage.setItem('meta-pixel-notice-dismissed', 'true');
};

export const MetaPixelProvider: React.FC<MetaPixelProviderProps> = ({
  children,
  autoInitialize = true,
  config: providedConfig = {}
}) => {
  const [service, setService] = useState<MetaPixelService | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true); // Always enabled now
  const [config, setConfig] = useState<MetaPixelConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initialize = (initConfig: MetaPixelConfig) => {
    try {
      // Validate required configuration
      if (!initConfig.pixelId || !initConfig.accessToken) {
        throw new Error('Meta Pixel ID and Access Token are required');
      }

      const pixelService = initializeMetaPixel(initConfig);
      setService(pixelService);
      setConfig(initConfig);
      setIsInitialized(true);
      setIsEnabled(true); // Always enabled
      setError(null);

      if (initConfig.enableLogging) {
        console.log('Meta Pixel initialized successfully', {
          pixelId: initConfig.pixelId,
          apiVersion: initConfig.apiVersion,
          isEnabled: true
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Meta Pixel';
      setError(errorMessage);
      console.error('Meta Pixel initialization error:', errorMessage);
    }
  };

  // Removed enable/disable functions as tracking is always enabled

  // Auto-initialize on mount if enabled
  useEffect(() => {
    if (autoInitialize && !isInitialized) {
      const defaultConfig = getDefaultConfig();
      const mergedConfig = { ...defaultConfig, ...providedConfig };
      
      // Only initialize if we have required config
      if (mergedConfig.pixelId && mergedConfig.accessToken) {
        initialize(mergedConfig as MetaPixelConfig);
      } else {
        setError('Meta Pixel configuration is incomplete. Please provide pixelId and accessToken.');
      }
    }
  }, [autoInitialize, isInitialized, providedConfig]);

  // Removed consent change listener as tracking is always enabled

  const contextValue: MetaPixelContextType = {
    service,
    isInitialized,
    isEnabled,
    config,
    error,
    initialize
  };

  return (
    <MetaPixelContext.Provider value={contextValue}>
      {children}
    </MetaPixelContext.Provider>
  );
};



// Notice banner component
interface NoticeBannerProps {
  onDismiss?: () => void;
  className?: string;
}

export const MetaPixelNoticeBanner: React.FC<NoticeBannerProps> = ({
  onDismiss,
  className = ''
}) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner if notice hasn't been dismissed yet
    if (!hasNoticeDismissed()) {
      setShowBanner(true);
    }
  }, []);

  const handleDismiss = () => {
    setNoticeDismissed();
    setShowBanner(false);
    onDismiss?.();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={`fixed top-0 left-0 right-0 bg-blue-600 text-white p-3 z-50 shadow-lg ${className}`}>
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            We use tracking pixels to analyze website traffic and improve your experience. 
            This helps us provide better services and relevant content.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 hover:bg-blue-700 rounded transition-colors"
          aria-label="Dismiss notice"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MetaPixelProvider;