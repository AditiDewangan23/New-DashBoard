import React from 'react'
import { Button } from '../ui/button';
// import { Switch } from '@radix-ui/react-switch';
import { Switch } from "@/components/ui/switch"

function Settings() {
  return (
    <div className="flex flex-col p-5 gap-3">

      <div className="flex flex-col h-1/5">
        <span className="font-extrabold text-xl">Cookie Settings</span>
        <span className="text-gray-500 text-sm">Manage your cookie settings here.</span>
      </div>

      <div className="flex">

        <div className="flex flex-col h-1/5">
          <span className="font-bold">Strictly Necessary</span>
          <span className="text-gray-500">
            These cookies are essential in order to use the website and use its
            features.
          </span>
        </div>
        <div>
          {/* <Switch /> */}
          <Switch />

        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col h-1/5">
          <span className="font-bold"> Functional Cookies</span>
          <span className="text-gray-500">
            These cookies allow the website to provide personalized
            functionality.
          </span>
        </div>
        <div>
          {/* <Switch /> */}
          <Switch />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col h-1/5">
          <span className="font-bold"> Performance Cookies</span>
          <span className="text-gray-500">
            These cookies help to improve the performance of the website.
          </span>
        </div>
        <div>
          {/* <Switch /> */}
          <Switch />
        </div>
      </div>
      <div><Button className={"bg-gray-200 w-full"}>Save prefrence</Button></div>
    </div>
  );
}

export default Settings