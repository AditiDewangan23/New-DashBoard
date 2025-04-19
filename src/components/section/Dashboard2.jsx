import React from 'react'
import Subscriptions from '../cards/Subscriptions';
import TotalRevenue from '../cards/TotalRevenue';
import { Calendar } from '../ui/calendar';
import MoveGoal from '../cards/MoveGoal';
import TeamMembers from '../cards/TeamMembers';
import MessageSection from '../cards/MessageSection';
import ExerciseGraph from '../cards/ExerciseGraph';
import Settings from '../cards/Settings';

function Dashboard2() {
  return (
    <div id="root" className="grid grid-cols-12 w-full gap-4 p-8">

      {/* Row One Start */}
      <div className="col-span-3 row-span-4 rounded-lg"><TotalRevenue /></div>
      <div className='col-span-3 row-span-4  rounded-lg'><Subscriptions /></div>
      <div className='col-span-2 row-span-5  rounded-lg'><Calendar /></div>
      <div className='col-span-4 row-span-5  rounded-lg'><MoveGoal /></div>
      {/* Row One End */}

      {/* Row Two Start */}
      <div className='col-span-3 row-span-5 rounded-lg'><TeamMembers/></div>
      <div className='col-span-3 row-span-6 rounded-lg'><MessageSection /></div>
      <div className='col-span-6 row-span-5 rounded-lg'><ExerciseGraph /></div>
      {/* Row Two End */}

      {/* Row Three Start */}
      <div className='col-span-3 row-span-6 rounded-lg'><Settings/></div>
      <div className='col-span-3 row-span-6 bg-black rounded-lg'></div>
      <div className='col-span-6 row-span-7 bg-black rounded-lg'></div>
      {/* Row Three End */}

      {/* Row Four Start */}
      <div className='col-span-3 row-span-6 bg-black rounded-lg'></div>
      <div className='col-span-3 row-span-5 bg-black rounded-lg'></div>
      <div className='col-span-6 row-span-4 bg-black rounded-lg'></div>
      {/* Row Four End */}

    </div>
  );
}

export default Dashboard2