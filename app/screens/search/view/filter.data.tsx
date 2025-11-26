import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';

export const data = [
  {
    id: 1,
    label: 'All Cars',
    value: 'All Cars',
  },
  {
    id: 2,
    label: 'Regular Cars',
    value: 'Regular Cars',
  },
  {
    id: 3,
    label: 'Luxury Cars',
    value: 'Luxury Cars',
  },
];

export const rentalData = [
  {
    id: 1,
    label: 'Hour',
    value: 'Hour',
  },
  {
    id: 2,
    label: 'Day',
    value: 'Day',
  },
  {
    id: 3,
    label: 'Monthly',
    value: 'Monthly',
  },
  {
    id: 4,
    label: 'Weekly',
    value: 'Weekly',
  },
];

export const sitingCapacity = [
  {
    id: 1,
    label: '2',
    value: '2',
  },
  {
    id: 2,
    label: '4',
    value: '4',
  },
  {
    id: 3,
    label: '5',
    value: '5',
  },
  {
    id: 4,
    label: '6',
    value: '6',
  },
];

export const FuelType = [
  {
    id: 1,
    label: 'Electric',
    value: 'Electric',
  },
  {
    id: 2,
    label: 'Petrol',
    value: 'Petrol',
  },
  {
    id: 3,
    label: 'Diesel',
    value: 'Diesel',
  },
  {
    id: 4,
    label: 'Hybrid',
    value: 'Hybrid',
  },
];

export const genderData = [
  {
    id: 1,
    label: 'Male',
    value: 'Male',
    component: <MaterialCommunityIcons name="human-male" size={scale(18)} />,
  },
  {
    id: 2,
    label: 'Female',
    value: 'Female',
    component: <MaterialCommunityIcons name="human-female" size={scale(18)} />,
  },
  {
    id: 3,
    label: 'Others',
    value: 'Others',
    component: (
      <MaterialCommunityIcons name="gender-male-female" size={scale(18)} />
    ),
  },
];
