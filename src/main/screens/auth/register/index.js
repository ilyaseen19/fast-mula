import React, {useContext} from 'react';
import EmergencyContact from './emrergContact';
import IdInfo from './idInfo';
import PesonalInfo from './personalInfo';
import WorkInfo from './wrokInfo';
import Context from '../../../../libs/stateManagement/context';

export default function Register() {
  const context = useContext(Context);
  const {registeration} = context.user;

  if (registeration === "id") return <IdInfo />;
  if (registeration === "personal") return <PesonalInfo />;
  if (registeration === "work") return <WorkInfo />;
  if (registeration === "emgcont") return <EmergencyContact />;

  return null;
}
