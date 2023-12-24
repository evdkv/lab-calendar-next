import { Button, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
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
        <p className="text-small font-bold">
              Account
            </p>
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
