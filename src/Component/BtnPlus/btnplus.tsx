import React, {useState} from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
const BtnPlus = ({onPress, actions, color, backgroundColor, icon}: any) => {
  const [open, setopen] = useState(true);

  const onStateChange = ({open}: any) => setopen(open);
  return (
    <Provider>
      <Portal>
        <FAB.Group
          color={color}
          // theme={open ? {colors: {accent: '#ff00e0'}} : undefined}
          fabStyle={backgroundColor}
          theme={{
            colors: {
              primary: '#ff00e0',
              accent: '#ff00e0',
            },
          }}

          
          // style={{backgroundColor: '#ff00e0'}}
          open={false}
          visible={true}
          icon={icon}
          actions={actions}
          onStateChange={onStateChange}
          onPress={onPress}
        />
      </Portal>
    </Provider>
  );
};
export default BtnPlus;
