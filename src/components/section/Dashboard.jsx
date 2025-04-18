import React from "react";
import { DatePicker } from "../ui/DatePicker";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "../ui/card";
import {
  Activity,
  CreditCard,
  DollarSign,
  Plus,
  UserRound,
  Users,
} from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import SaleCard from "./sale/SaleCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ComboboxDemo } from "../ui/ComboBox";

function Dashboard() {
  const chartData = [
    { month: "January", desktop: 188, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  return (
    <div id="root" className="flex flex-col">
      <div id="top-nav" className="flex flex-row justify-between py-4 px-5">
        <div
          id="switcher-nav"
          className="flex flex-1 flex-row gap-10 items-center"
        >
          <span>
            <ComboboxDemo />
          </span>
          <div className="flex gap-5 flex-row ">
            <span className="text-gray-500 hover:text-black font-bold">
              Overview
            </span>
            <span className="text-gray-500 hover:text-black font-bold">
              Products
            </span>
            <span className="text-gray-500 hover:text-black font-bold">
              settings
            </span>
            <span className="text-gray-500 hover:text-black font-bold">
              Costomers
            </span>
          </div>
        </div>
        <div id="search-avatar" className="flex justify-center  gap-2">
          <span>
            <Input />
          </span>
          <Avatar>
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <hr />

      <div className="py-4 px-5 flex flex-col gap-5">
        <div className="flex flex-row justify-between items-center ">
          <span className="text-3xl font-bold">Dashboard</span>
          <div className="flex gap-5">
            <span>
              <DatePicker />
            </span>
            <span>
              <Button>Download</Button>
            </span>
          </div>
        </div>
        <div className="">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            {/* <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
          </Tabs>
        </div>
        <div className="grid grid-cols-2 md:grid md:grid-cols-4 md:gap-5">
          <Card>
            <div className="flex justify-between px-5">
              <div className="flex flex-col gap-2">
                <span className="">total revenue</span>
                <div>
                  <span className="flex font-bold text-3xl items-center">
                    $45,231.89
                  </span>
                  <span className="text-gray-500">+20.1% from last month</span>
                </div>
              </div>
              <div>
                <DollarSign />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between px-5">
              <div className="flex flex-col gap-2">
                <span className="">Subscriptions</span>
                <div>
                  <span className="flex font-bold text-3xl items-center">
                    +45,231.89
                  </span>
                  <span className="text-gray-500">+20.1% from last month</span>
                </div>
              </div>
              <div>
                <Users />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between px-5">
              <div className="flex flex-col gap-2">
                <span className="">Sales</span>
                <div>
                  <span className="flex font-bold text-3xl items-center">
                    +45,231.89
                  </span>
                  <span className="text-gray-500">+20.1% from last month</span>
                </div>
              </div>
              <div>
                <CreditCard />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between px-5">
              <div className="flex flex-col gap-2">
                <span className="">Active Now</span>
                <div>
                  <span className="flex font-bold text-3xl items-center">
                    +45,231.89
                  </span>
                  <span className="text-gray-500">+20.1% from last month</span>
                </div>
              </div>
              <div>
                <Activity />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card>
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart accessibilityLayer data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </Card>
          <Card className="flex flex-col gap-5 p-5">
            <div className="flex flex-col ">
              <span className="text-lg font-bold">Recent Sales</span>
              <span className="text-gray-500">
                You made 265 sales this month.
              </span>
            </div>
            <div>
              <SaleCard
                name="Olivia Martin"
                email="olivia.martin@email.com"
                amount="+$1,999.00"
              />
              <SaleCard
                name="Olivia Martin"
                email="olivia.martin@email.com"
                amount="+$1,999.00"
              />
              <SaleCard
                name="Olivia Martin"
                email="olivia.martin@email.com"
                amount="+$1,999.00"
              />
              <SaleCard
                name="Olivia Martin"
                email="olivia.martin@email.com"
                amount="+$1,999.00"
              />
              <SaleCard
                name="Olivia Martin"
                email="olivia.martin@email.com"
                amount="+$1,999.00"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
