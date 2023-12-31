import { Link, Skeleton } from "@nextui-org/react";
import { UserMenu } from "@/components/menu";
import { Calendar } from "@/components/calendar";
import { useSession } from "next-auth/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import { SignInButton } from "./accountbtns";

export const Dashboard = () => {
  const { data: session, status } = useSession(); 

  if (status === "authenticated") {
    return <UserDashboard />;
  } else if (status === "loading") {
    return <DashboardSkeleton />
  } else {  
    return <WelcomeCard />;
  }
}

export const UserDashboard = () => {
  return (
    <>
        <Card className="w-[20vw] h-[90vh]">
          <CardHeader>
            <h3 className="text-2xl">Menu</h3>
          </CardHeader>
          <CardBody className="gap-4">
            <UserMenu />
          </CardBody>
          <CardFooter>
            <p className="text-xs">
              made with 💙 by{" "}
              <Link
                isExternal
                href="https://evdkv.cc/?utm_medium=rlab_calendar"
                className="text-xs"
              >
                {" "}
               evdkv
              </Link>
            </p>
          </CardFooter>
        </Card>
        <Card className="w-[80vw] h-[90vh]">
          <CardHeader>
            <h3 className="text-2xl">Dashboard</h3>
          </CardHeader>
          <CardBody className="gap-4">
            <Calendar />
          </CardBody>
        </Card>
    </>
  );
}

export const DashboardSkeleton = () => {
    return (
        <>
        <Card className="w-[20vw] h-[90vh]">
          <CardHeader>
          <Skeleton className="h-10 w-40 rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          </CardHeader>
          <CardBody className="gap-4">
          <Skeleton className="h-10 w-full rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="h-10 w-full rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="h-10 w-full rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="h-10 w-full rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="h-10 w-full rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          </CardBody>
        </Card>
        <Card className="w-[80vw] h-[90vh]">
          <CardHeader>
          <Skeleton className="h-10 w-40 rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
          </Skeleton>
          </CardHeader>
          <CardBody className="gap-4">
            <Skeleton className="h-full w-full rounded-lg">
                <div className="h-[90%] rounded-lg bg-default-300"></div>
            </Skeleton>
          </CardBody>
        </Card>
    </>
    );
  }

export const WelcomeCard = () => {
    return (
        <>
        <Card className="w-[100vw] h-[90vh]">
          <CardBody className="flex flex-col items-center justify-center gap-7">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">Welcome to Robbins Lab!</h2>
                <p className="text-lg text-slate-600">Please sign in to see your dashboard</p>
            </div>
            <SignInButton />
          </CardBody>
        </Card>
    </>
);


}
/* 
- have a dashboard component
- return login page if not logged in
- return skeleton if loading
- return dashboard if logged in
*/