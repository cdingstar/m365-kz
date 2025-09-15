import React from 'react';
import ProductUsageTemplate from '../../components/ProductUsageTemplate';
import { powerBiConfig } from './powerPlatformUsageConfig';

const PowerBiUsageTab = () => {
  return <ProductUsageTemplate config={powerBiConfig} />;
};

export default PowerBiUsageTab;