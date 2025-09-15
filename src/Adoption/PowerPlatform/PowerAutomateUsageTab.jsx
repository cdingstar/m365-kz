import React from 'react';
import ProductUsageTemplate from '../../components/ProductUsageTemplate';
import { powerAutomateConfig } from './powerPlatformUsageConfig';

const PowerAutomateUsageTab = () => {
  return <ProductUsageTemplate config={powerAutomateConfig} />;
};

export default PowerAutomateUsageTab;