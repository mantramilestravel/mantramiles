import { createContext } from 'react';
import MetaPixelService from '../services/metaPixel';
import { MetaPixelConfig } from '../types/metaPixel';

export interface MetaPixelContextType {
  service: MetaPixelService | null;
  isInitialized: boolean;
  isEnabled: boolean;
  config: MetaPixelConfig | null;
  error: string | null;
  initialize: (config: MetaPixelConfig) => void;
}

export const MetaPixelContext = createContext<MetaPixelContextType | undefined>(undefined);