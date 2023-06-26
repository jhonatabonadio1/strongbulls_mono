import React from 'react';
import {ViewStyle} from 'react-native';

import {Container, Group, Icon, InputContainer, Label, Name} from './styles';

type InputProps = {
  label: string;
  style?: ViewStyle;
  options: {
    id: string;
    name: string;
  }[];
  selected: string;
  onSelect: (value: string) => void;
};

export function Radio({label, options, selected, style, onSelect}: InputProps) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <InputContainer>
        {options.map(item => (
          <Group
            key={item.id}
            onPress={() => onSelect(item.id)}
            activeOpacity={1}>
            <Icon
              name={selected === item.id ? 'radiobox-marked' : 'radiobox-blank'}
            />
            <Name>{item.name}</Name>
          </Group>
        ))}
      </InputContainer>
    </Container>
  );
}
