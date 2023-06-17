import {format} from 'date-fns';
import React from 'react';
import {ViewStyle} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {Container, DateInputContainer, DateInputText, Label} from './styles';

type DateInputProps = {
  label: string;
  style?: ViewStyle;
  open: boolean;
  date: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onPress: () => void;
};

export function DateInput({
  label,
  style,
  open,
  date,
  onConfirm,
  onCancel,
  onPress,
}: DateInputProps) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <DateInputContainer activeOpacity={1} onPress={onPress}>
        <DateInputText>{format(date, 'dd/MM/yyyy')}</DateInputText>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </DateInputContainer>
    </Container>
  );
}
