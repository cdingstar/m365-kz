import React from 'react';
import ProductUsageTemplate from '../../components/ProductUsageTemplate';
import { projectUsageConfigs } from './projectUsageConfig';

const ProjectUsagePlan1Tab = () => {
  return <ProductUsageTemplate config={projectUsageConfigs.plan1} />;
};

export default ProjectUsagePlan1Tab;