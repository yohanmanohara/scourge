import React from 'react'
import { Avatar } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import { Button, Dropdown, DropdownMenu, DropdownTrigger, NavbarItem } from '@nextui-org/react';
import { DropdownItem } from '@nextui-org/react';

export default function Avata() {
    const { data: session } = useSession();
  return (
    <div>
     
      <Dropdown className='dark'>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
               
                radius="sm"
                variant="light"
              >
                 <p className=" text-white hidden sm:block" >Hi ! {session?.user?.name}</p>
                 <Avatar src={session?.user?.image} size="md" />
               
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
           
           <DropdownItem className='text-white' onClick={()=>{signOut()}}>
            Log Out
           </DropdownItem>
           
           
           

          </DropdownMenu>
        </Dropdown>






    </div>
  )
}
