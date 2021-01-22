import * as React from 'react';
import{ DropdownCT } from './DropdownMenu/DropdownCT';
import { CreateTaskBtn } from './Buttons/CreateTaskBtn';
import { SingleTask } from './SingleTask';


import { Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

// Styles definition
const stackStyles: IStackStyles = {
  root: {
    // background: DefaultPalette.themeTertiary,
  },
};
const buttonStyles: React.CSSProperties = {
  alignItems: 'center',

  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 200,
  padding: 50,
};
const dropStyles: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: 50,
  justifyContent: 'center',
  width: 50,
  paddingTop: 50,
  paddingBottom: 50,
};
// Tokens definition
const stackTokens: IStackTokens = { childrenGap: 5 };
//.....

  export const CreateTask = () => { 

  return (
    <>
      <div style={{paddingTop:"120px"}}>
        <Stack tokens={stackTokens}>
          <Stack horizontalAlign="center" styles={stackStyles}>
            <span style={buttonStyles}>
                <CreateTaskBtn />
            </span>
            <span style={dropStyles}>
              <DropdownCT />
            </span>
          </Stack>
        </Stack>
        <SingleTask />

      </div>
    </>
  );
};
