import { __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { PlusIcon } from '../icons';
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        icon: { control: 'false' },
    },
};
var Template = function (args) { return (<Button {...args}>Click Me!</Button>); };
export var Default = Template.bind({});
Default.args = {
    buttonView: 'filled',
    disabled: false,
};
Default.parameters = {
    options: {
        showPanel: true,
    },
};
export var WithIcon = Template.bind({});
WithIcon.args = {
    buttonView: 'filled',
    disabled: false,
    icon: <PlusIcon />,
};
WithIcon.parameters = {
    options: {
        showPanel: true,
    },
};
var ButtonShowcase = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n\n  & > *:nth-child(odd) {\n    margin-top: 1.5rem;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n\n  & > *:nth-child(odd) {\n    margin-top: 1.5rem;\n  }\n"])));
var RenderAllVariant = function () { return (<ButtonShowcase>
    <Button buttonView='filled'>Click Me!</Button>
    <Button buttonView='filled' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='outlined'>Click Me!</Button>
    <Button buttonView='outlined' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='text'>Click Me!</Button>
    <Button buttonView='text' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='elevated'>Click Me!</Button>
    <Button buttonView='elevated' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='tonal'>Click Me!</Button>
    <Button buttonView='tonal' icon={<PlusIcon />}>
      Click Me!
    </Button>
  </ButtonShowcase>); };
export var AllVariants = RenderAllVariant.bind({});
AllVariants.args = {
    buttonView: 'filled',
    disabled: false,
    icon: <PlusIcon />,
};
AllVariants.parameters = {
    options: {
        showPanel: false,
    },
};
var templateObject_1;
//# sourceMappingURL=button.stories.jsx.map