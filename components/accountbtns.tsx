import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Chip,
  Skeleton,
} from "@nextui-org/react";

import { AccountIcon } from "./icons";
import { useSession, signOut, signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <Button
      className="text-sm font-normal text-default-600 bg-default-100"
      variant="flat"
      onPress={() => signIn()}
    >
      Sign In
    </Button>
  );
};

export const SignOutButton = () => {
  return (
    <Button
      className="text-sm font-normal text-default-600 bg-default-100"
      variant="flat"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
};

export const AccountButton = () => {
  const { data: session, status } = useSession();

  return (
    <Popover backdrop="opaque" placement="bottom-start" offset={10}>
      <PopoverTrigger>
        <Button
          className="text-sm font-normal text-default-600 bg-default-100"
          variant="flat"
        >
          <AccountIcon />
          Account
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] items-start">
        <div className="flex flex-row justify-between w-full mt-2">
          <p className="text-xl">{session?.user?.name ?? ""}</p>
          <Avatar radius="full" size="lg" src={session?.user?.image ?? ""} />
        </div>
        <p className="text-small">{session?.user?.email ?? ""}</p>
        <div className="flex flex-row justify-start w-full mt-2 gap-1">
          <Chip size="sm" color="primary" variant="dot">
            Member
          </Chip>
          <Chip size="sm" color="success" variant="shadow">
            Active
          </Chip>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export const HeaderButtons = () => {
  {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
      return (
        <div className="hidden md:flex gap-2">
          <AccountButton />
          <SignOutButton />
        </div>
      );
    } else if (status === "loading") {
      return (
        <Button className="w-[13vw]">
          <Skeleton className="h-3/5 w-4/5 rounded-lg">
            <div className="h-1 rounded-lg bg-default-300"></div>
          </Skeleton>
        </Button>
      );
    }
    return <SignInButton />;
  }
};
