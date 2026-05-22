import type { PersonProfile } from '../types';

export const personProfile: PersonProfile = {
  id: 'ho-chi-minh',
  primaryName: 'H\u1ed3 Ch\u00ed Minh',
  birth: { date: '19/05/1890', place: 'Kim Li\u00ean, Nam \u0110\u00e0n, Ngh\u1ec7 An' },
  death: { date: '02/09/1969', place: 'H\u00e0 N\u1ed9i' },
  names: [
    { name: 'Nguy\u1ec5n Sinh Cung', context: 't\u00ean l\u00fac nh\u1ecf' },
    { name: 'Nguy\u1ec5n T\u1ea5t Th\u00e0nh', context: 't\u00ean khi \u0111i h\u1ecdc v\u00e0 tu\u1ed5i tr\u1ebb' },
    { name: 'V\u0103n Ba', context: 't\u00ean d\u00f9ng khi l\u00e0m vi\u1ec7c tr\u00ean t\u00e0u n\u0103m 1911' },
    { name: 'Nguy\u1ec5n \u00c1i Qu\u1ed1c', context: 't\u00ean ho\u1ea1t \u0111\u1ed9ng c\u00e1ch m\u1ea1ng \u1edf Ph\u00e1p v\u00e0 qu\u1ed1c t\u1ebf' },
    { name: 'H\u1ed3 Ch\u00ed Minh', context: 't\u00ean ch\u00ednh th\u1ee9c v\u00e0 ph\u1ed5 bi\u1ebfn nh\u1ea5t v\u1ec1 sau' },
    { name: 'Tr\u1ea7n D\u00e2n Ti\u00ean', context: 'b\u00fat danh/t\u00ean t\u00e1c gi\u1ea3' },
    { name: 'T. Lan', context: 'b\u00fat danh' },
  ],
  roles: [
    'L\u00e3nh t\u1ee5 c\u00e1ch m\u1ea1ng Vi\u1ec7t Nam',
    'Ng\u01b0\u1eddi s\u00e1ng l\u1eadp \u0110\u1ea3ng C\u1ed9ng s\u1ea3n Vi\u1ec7t Nam',
    'Ch\u1ee7 t\u1ecbch n\u01b0\u1edbc Vi\u1ec7t Nam D\u00e2n ch\u1ee7 C\u1ed9ng h\u00f2a',
    'Nh\u00e0 v\u0103n, nh\u00e0 th\u01a1, nh\u00e0 b\u00e1o',
    'Nh\u00e2n v\u1eadt ti\u00eau bi\u1ec3u c\u1ee7a phong tr\u00e0o gi\u1ea3i ph\u00f3ng d\u00e2n t\u1ed9c',
  ],
  legacyTitles: [
    'Anh h\u00f9ng gi\u1ea3i ph\u00f3ng d\u00e2n t\u1ed9c',
    'Nh\u00e0 v\u0103n h\u00f3a ki\u1ec7t xu\u1ea5t c\u1ee7a Vi\u1ec7t Nam',
  ],
};
