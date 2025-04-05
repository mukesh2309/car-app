import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createStyles} from './styles';
import {colors} from '../../theme/colors';

const VisaCard = ({
  cardNumber = '2323 1223 2323 1234',
  name = 'JOHN DOE',
  expiry = '12/26',
}) => {
  const styles = createStyles();
  return (
    <LinearGradient
      colors={[
        colors.visaCard.primary,
        colors.visaCard.secondary,
        colors.visaCard.gray,
        colors.visaCard.gray2,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.card}>
      <Text style={styles.visaText}>VISA</Text>
      <View style={styles.rowG20}>
        <View style={styles.bottomRow}>
          <View style={styles.nameRow}>
            <Text style={styles.info}>{name}</Text>
            <View style={styles.expireRow}>
              <Text style={styles.label}>Expire</Text>
              <Text style={styles.info}>{expiry}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
      </View>
    </LinearGradient>
  );
};

export default VisaCard;
