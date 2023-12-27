import { Link } from "@nextui-org/link";
import DefaultLayout from "@/layouts/default";
import { UserMenu } from "@/components/menu";
import { Calendar } from "@/components/calendar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-row items-center justify-center gap-3 py-8 md:py-1">
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
              >
                {" "}
                <p className="text-xs">evdkv</p>
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
      </section>
    </DefaultLayout>
  );
}
