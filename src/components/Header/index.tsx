import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";

import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notifications />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
