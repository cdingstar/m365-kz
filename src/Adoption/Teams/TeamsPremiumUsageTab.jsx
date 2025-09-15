import React from 'react';
import ProductUsageTemplate from '../../components/ProductUsageTemplate';
import { teamsPremiumConfig } from './teamsUsageConfig';

const TeamsPremiumUsageTab = () => {
  return <ProductUsageTemplate config={teamsPremiumConfig} />;
};

export default TeamsPremiumUsageTab;