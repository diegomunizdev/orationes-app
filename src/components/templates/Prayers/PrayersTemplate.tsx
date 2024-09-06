import { useNavigation } from '@react-navigation/native';

import ViewBase from '../../shared/ViewBase/ViewBase';
import PrayerOptionOrganism from '../../organisms/Prayers/PrayerOption/PrayerOptionOrganism';

export default function PrayersTemplate(): JSX.Element {
  const { navigate } = useNavigation();

  const prayersList = [
    {
      title: 'Alma de Cristo',
      description: 'Santificai-me.',
      action: () => navigate('Prayers.AlmaDeCristo' as never),
    },
    {
      title: 'Jesus Sacramentado',
      description:
        'Estais tão presente, poderoso e glorioso como estais no céu.',
      action: () => navigate('Prayers.JesusSacramentado' as never),
    },
    {
      title: 'São Bento',
      description: 'A Cruz Sagrada seja minha luz.',
      action: () => navigate('Prayers.SaoBento' as never),
    },
    {
      title: 'São Miguel Arcanjo',
      description: 'Defendei-nos no combate.',
      action: () => navigate('Prayers.SaoMiguel' as never),
    },
  ];

  return (
    <ViewBase>
      {prayersList.map((pray, index) => (
        <PrayerOptionOrganism {...pray} key={index} />
      ))}
    </ViewBase>
  );
}
