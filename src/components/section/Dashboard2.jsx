import React from 'react'
import Subscriptions from '../cards/Subscriptions';
import TotalRevenue from '../cards/TotalRevenue';
import { Calendar } from '../ui/calendar';
import MoveGoal from '../cards/MoveGoal';
import TeamMembers from '../cards/TeamMembers';
import MessageSection from '../cards/MessageSection';

import Settings from '../cards/Settings';
import { LoginForm } from '../cards/Login';
import { Table } from '../ui/table';
import Payment from '../cards/PaymentMethod';
import Document from '../cards/Document';
import Report from '../cards/Report';
import PaymentMethod from '../cards/Payment';
import { Card } from '../ui/card';
import { MultipleLineChart } from '../ui/MultipleLineChart';

function Dashboard2() {
  return (
    <div id="root" className="grid grid-cols-12 w-full gap-4 p-8">

      {/* Row One Start */}
      <Card className="col-span-3 row-span-4 rounded-lg"><TotalRevenue /></Card>
      <Card className='col-span-3 row-span-4  rounded-lg'><Subscriptions /></Card>
      <Card className='col-span-2 row-span-5  rounded-lg'><Calendar /></Card>
      <Card className='col-span-4 row-span-5  rounded-lg'><MoveGoal /></Card>
      {/* Row One End */}

      {/* Row Two Start */}
      <Card className='col-span-3 row-span-5 rounded-lg'><TeamMembers /></Card>
      <Card className='col-span-3 row-span-6 rounded-lg'><MessageSection /></Card>
      <div className='col-span-6 row-span-5 rounded-lg'><MultipleLineChart /></div>
      {/* Row Two End */}

      {/* Row Three Start */}
      <Card className='col-span-3 row-span-6 rounded-lg'><Settings /></Card>
      <Card className='col-span-3 row-span-6 rounded-lg'><LoginForm /></Card>
      <Card className='col-span-6 row-span-7 rounded-lg'><PaymentMethod /></Card>
      {/* Row Three End */}

      {/* Row Four Start */}
      <Card className='col-span-3 row-span-6  rounded-lg'><Payment /></Card>
      <Card className='col-span-3 row-span-5  rounded-lg'><Report /></Card>
      <Card className='col-span-6 row-span-4  rounded-lg'><Document /></Card>
      {/* Row Four End */}

    </div>
  );
}

export default Dashboard2