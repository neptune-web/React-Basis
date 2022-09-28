import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkText } from './LinkText';

export default {
  title: 'Basis/LinkText',
  component: LinkText,
} as ComponentMeta<typeof LinkText>;

const Template: ComponentStory<typeof LinkText> = (args) => <LinkText {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  label1: 'Already have an account?',
  label2: 'Sign In',
  handleClickLink: () => {},
};

export const SignUp = Template.bind({});
SignUp.args = {
  label1: 'New to Basis?',
  label2: 'Sign Up Here',
  handleClickLink: () => {},
};

export const joinus = Template.bind({});
joinus.args = {
  label1: 'Already have an account?',
  label2: 'Sign In',
  handleClickLink: () => {},
};
