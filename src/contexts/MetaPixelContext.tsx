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

// Safe environment variable access helper with debugging
const getEnvVar = (key: string, defaultValue: string = '') => {
  console.log(`🔍 Attempting to get environment variable: ${key}`);
  
  try {
    // Log all available import.meta.env variables
    console.log('📋 All import.meta.env variables:', import.meta.env);
    
    // Check if we're in a Vite environment with import.meta.env
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).__VITE_ENV__) {
      const windowEnv = (window as unknown as Record<string, unknown>).__VITE_ENV__ as Record<string, string>;
      console.log('🪟 Window __VITE_ENV__ found:', windowEnv);
      const value = windowEnv[key] || defaultValue;
      console.log(`✅ Got ${key} from window.__VITE_ENV__:`, value);
      return value;
    }
    
    // Fallback to import.meta.env if available
    const metaEnvValue = (import.meta as { env?: Record<string, string> })?.env?.[key];
    console.log(`🔄 import.meta.env.${key}:`, metaEnvValue);
    
    const finalValue = metaEnvValue || defaultValue;
    console.log(`✅ Final value for ${key}:`, finalValue);
    
    return finalValue;
  } catch (error) {
    console.error(`❌ Failed to access environment variable ${key}:`, error);
    return defaultValue;
  }
};

// Temporary test values for debugging (remove after testing)
const getTestEnvVar = (key: string, defaultValue: string = '') => {
  const testValues: Record<string, string> = {
    'VITE_META_PIXEL_ID': '1432150071232639', // Test value from .env.local
    'VITE_META_PIXEL_TOKEN': 'EAALPpJ0WXX8BPeMNUyW5CeUMmFrnV8mcco6XLqelTwRZBimjXiP8f22OaylutR0dKHhYYQHJsxjYpv5x0zSVP4azYVGSLl84lfiLAmOPydYYRzrHQk1ZAsu15wS8szNQLKZCBKjcPuLdBXP28qI9GHFra4oid0LilNeRW7ezH2naCCmR3pyqdtmgb80WbFLBwZDZD', // Test value
    'VITE_META_PIXEL_TEST_CODE': 'TEST32092',
    'VITE_META_PIXEL_API_VERSION': 'v18.0',
    'VITE_META_PIXEL_LOGGING': 'true'
  };
  
  const testValue = testValues[key];
  if (testValue) {
    console.log(`🧪 Using test value for ${key}:`, testValue);
    return testValue;
  }
  
  return getEnvVar(key, defaultValue);
};

// Default configuration with debugging
const getDefaultConfig = (): Partial<MetaPixelConfig> => {
  console.log('🔧 Getting default Meta Pixel configuration...');
  
  // Use test values for now to debug
  const config = {
    pixelId: getTestEnvVar('VITE_META_PIXEL_ID'),
    accessToken: getTestEnvVar('VITE_META_PIXEL_TOKEN'),
    apiVersion: getTestEnvVar('VITE_META_PIXEL_API_VERSION', 'v18.0'),
    enableLogging: getTestEnvVar('VITE_META_PIXEL_LOGGING') === 'true' || getEnvVar('DEV') === 'true',
    testEventCode: getTestEnvVar('VITE_META_PIXEL_TEST_CODE')
  };
  
  console.log('📋 Generated Meta Pixel config:', config);
  return config;
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
    console.log('🎯 MetaPixelNoticeBanner: Component mounted');
    console.log('🌍 Current environment variables check:');
    
    // Test environment variable access
    const testConfig = getDefaultConfig();
    console.log('🧪 Test config from banner component:', testConfig);
    
    // Show banner if notice hasn't been dismissed yet
    if (!hasNoticeDismissed()) {
      console.log('✅ MetaPixelNoticeBanner: Notice not dismissed, showing banner');
      setShowBanner(true);
    } else {
      console.log('❌ MetaPixelNoticeBanner: Notice already dismissed');
    }
  }, []);

  const handleDismiss = () => {
    console.log('MetaPixelNoticeBanner: Dismissing banner');
    setNoticeDismissed();
    setShowBanner(false);
    onDismiss?.();
  };

  if (!showBanner) {
    console.log('MetaPixelNoticeBanner: Not showing banner');
    console.warn('Environment variables:', {
      pixelId: getEnvVar('VITE_META_PIXEL_ID'),
      accessToken: getEnvVar('VITE_META_PIXEL_TOKEN'),
      apiVersion: getEnvVar('VITE_META_PIXEL_API_VERSION', 'v18.0'),
      enableLogging: getEnvVar('DEV') === 'true',
      testEventCode: getEnvVar('VITE_META_PIXEL_TEST_CODE')
    });

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