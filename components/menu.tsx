import React from "react";
import {Button} from "@nextui-org/react";

export const UserMenu = () => {
    return (
        <div className="flex flex-col gap-4 items-left">
        <Button color="default" variant="flat">
          Dashboard
        </Button>    
        <Button color="default" variant="flat">
          Announcements
        </Button>
        <Button color="default" variant="flat">
          Request Change
        </Button>
        <Button color="default" variant="flat" isDisabled>
          Stats
        </Button>
      </div>
    )
};