import React, {useContext} from 'react';
import Contexts from '../../../../libs/contexts';
import EmergencyContact from './emrergContact';
import IdInfo from './idInfo';
import PesonalInfo from './personalInfo';
import WorkInfo from './wrokInfo';

export default function Register() {
  const context = useContext(Contexts);
  const {registerSteps} = context.system;

  if (registerSteps === 1 || registerSteps === undefined) return <IdInfo />;
  if (registerSteps === 2) return <PesonalInfo />;
  if (registerSteps === 3) return <WorkInfo />;
  if (registerSteps === 4) return <EmergencyContact />;

  return null;
}
