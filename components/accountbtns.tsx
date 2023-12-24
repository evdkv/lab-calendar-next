import { Button, Popover, PopoverTrigger, PopoverContent, Avatar, Chip} from "@nextui-org/react";
import { AccountIcon } from "./icons";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "@nextui-org/react";


export const SignInButton = () => {
    return (
        <Button
			className="text-sm font-normal text-default-600 bg-default-100"
			variant="flat"
            onPress={() => signIn()}
		>
		Sign In
		</Button>
    )
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
    )
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
        {/* <p className="text-small font-bold">
              Account
            </p> */}
        <div className="flex flex-row justify-between w-full mt-2">
            <p className="text-xl">
              {session?.user?.name ?? ''}
            </p>
            <Avatar size="lg" src={session?.user?.image ?? ''} />
        </div>
            <p className="text-small">
              {session?.user?.email ?? ''}
            </p>
        <div className="flex flex-row justify-start w-full mt-2 gap-1">
            <Chip size="sm" color="success" variant="dot">Member</Chip>
            <Chip size="sm" color="success" variant="shadow">Active</Chip>
        </div>
        </PopoverContent>
        </Popover>

    )
};

export const HeaderButtons = () => { {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return 	<div className="hidden md:flex gap-2"><AccountButton /><SignOutButton /></div>
  }

  return <SignInButton />
}

};
