import ViewBase from '../../shared/ViewBase/ViewBase';
import PrayerOptionOrganism from '../../organisms/Prayers/PrayerOption/PrayerOptionOrganism';
import { useNavigationContext } from '../../../../application/contexts/navigation/navigation.context';

export default function PrayersTemplate(): JSX.Element {
  const navigation = useNavigationContext();

  const prayersList = [
    {
      title: 'Alma de Cristo',
      description: 'Santificai-me.',
      action: () => navigation?.navigate('Prayers.AlmaDeCristo' as never),
    },
    {
      title: 'Jesus Sacramentado',
      description:
        'Estais tão presente, poderoso e glorioso como estais no céu.',
      action: () => navigation?.navigate('Prayers.JesusSacramentado' as never),
    },
    {
      title: 'São Bento',
      description: 'A Cruz Sagrada seja minha luz.',
      action: () => navigation?.navigate('Prayers.SaoBento' as never),
    },
    {
      title: 'São Miguel Arcanjo',
      description: 'Defendei-nos no combate.',
      action: () => navigation?.navigate('Prayers.SaoMiguel' as never),
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
