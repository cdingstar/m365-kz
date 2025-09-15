import React from 'react';
import ProductUsageTemplate from '../../components/ProductUsageTemplate';
import { powerAppsConfig } from './powerPlatformUsageConfig';

const PowerAppsUsageTab = () => {
  return <ProductUsageTemplate config={powerAppsConfig} />;
};

export default PowerAppsUsageTab;