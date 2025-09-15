import React from 'react';
import ProductUsageTemplate from '../../components/ProductUsageTemplate';
import { teamsStandardConfig } from './teamsUsageConfig';

const TeamsStandardUsageTab = () => {
  return <ProductUsageTemplate config={teamsStandardConfig} />;
};

export default TeamsStandardUsageTab;