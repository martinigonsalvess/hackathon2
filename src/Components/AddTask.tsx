import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DropdownDate } from './DropdownMenu/DropdownDate'
import { DropdownCT } from './DropdownMenu/DropdownCT';
import { SaveBtn } from './Buttons/SaveBtn';

import { Stack} from 'office-ui-fabric-react/lib/Stack';

 
export const AddTask = () => {

    return (
      <div style={{paddingTop:"120px"}}>
        <Stack>
          <Stack horizontalAlign="center">
            <span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50vh',
                }}
              >
                <TextField label="Description" multiline autoAdjustHeight />
              </div>
            </span>

            <span>
              <DropdownDate />
            </span>
            <span>
              <DropdownCT />
            </span>
            <span>
              <SaveBtn />
            </span>
          </Stack>
        </Stack>
      </div>
    );
}