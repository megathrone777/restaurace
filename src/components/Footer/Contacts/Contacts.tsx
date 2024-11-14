import React from "react";

import { Icon } from "~/theme/components";
import { items } from "./Contacts.data";
import type { TContactItem } from "./Contacts.types";
import {
  StyledList,
  StyledItem,
  StyledLink,
  StyledIcon,
} from "./Contacts.styled";

const Contacts: React.FC = () => (
  <StyledList>
    {items.map(
      (
        { iconId, text, url }: TContactItem,
        index: number
      ): React.ReactElement => (
        <StyledItem key={`${iconId}-${index}`}>
          <StyledLink href={url} target="_blank">
            <StyledIcon>
              <Icon id={iconId} />
            </StyledIcon>
            {text}
          </StyledLink>
        </StyledItem>
      )
    )}
  </StyledList>
);

export { Contacts };
