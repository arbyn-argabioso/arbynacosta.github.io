const SOURCES = {
  'Present and Direct Interactions': [
    'GHB5-TWN:birthDate',
    'GHB5-TWN:firstName',
    'GHB5-TWN:gender',
    'GHB5-TWN:lastName',
    'GHB5-TWN:middleName',
    'GQX8-CQP:birthDate',
    'GQX8-CQP:firstName',
    'GQX8-CQP:gender',
    'GQX8-CQP:lastName',
    'GQX8-CQP:middleName',
    'TEMP-000:GHB5-TWN:parentChild', // aesthetic data consideration
    'TEMP-000:GQX8-CQP:parentChild', // aesthetic data consideration
    'GQJK-LCT:birthPlace',
    'GQX8-CQP:marker',
    'GQJK-G8W:marker',
    'GQJK-L51:marker',
    'GHBZ-YVX:marker',
    'GHB5-XTZ:marker',
    'GHBR-FK3:marker',
  ],
  // Arbyn Argabioso birth certificate
  'https://drive.google.com/file/d/1B1umw_xm5i-AmNp9YzshX2DebSAhj3cz/view?usp=sharing': [
    'GQX8-CQP:birthDate',
    'GQX8-CQP:birthPlace',
    'GQX8-CQP:firstName',
    'GQX8-CQP:gender',
    'GQX8-CQP:middleName',
    'GQX8-CQP:GQJK-G8W:parentChild',
    'GQX8-CQP:GQJK-L51:parentChild',
    'GQJK-L51:GQJK-G8W:partner',
  ],
  'https://web.facebook.com/arbyn.argabioso/posts/pfbid02U3X7BU11Lb41vrbLQKrAyGe8oCEvd8SSqbY8rcCZ2MEQzcb3BUQJWL8UPhF1ZttYl': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],
  // Mitch's birth certificate
  'https://drive.google.com/file/d/19s_gdN98AQ1sZ5lhqSf8GrpJJIpFhsdf/view?usp=sharing': [
    'GHB5-TWN:firstName',
    'GHB5-TWN:middleName',
    'GHB5-TWN:lastName',
    'GHB5-TWN:gender',
    'GHB5-TWN:birthDate',
    'GHB5-TWN:birthPlace',

    'GHB5-TWN:GHB5-XTZ:parentChild',
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',

    'GHB5-TWN:GHBR-FK3:parentChild',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',

    'GHB5-XTZ:GHBR-FK3:partner',
  ],
  // Tatay Roland's birth certificate
  'https://drive.google.com/file/d/1degLEAa8cBBxJrRsWwz0t6wHh9vs29cH/view?usp=sharing': [
    'GQJK-L51:birthDate',
    'GQJK-L51:birthPlace',
    'GQJK-L51:firstName',
    'GQJK-L51:gender',
    'GQJK-L51:lastName',
    'GQJK-L51:middleName',
    'GQJK-L51:GQJK-LCT:parentChild',
    'GQJK-L51:GHBZ-YVX:parentChild',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
  ],
  // Inquirer.net's article about Tatay Roland's NBI work
  'https://drive.google.com/file/d/1Zw8fzrh9ELRvIx1W7ncqT010edcT6hpK/view?usp=sharing': [
    'GQJK-L51:marker',
  ],
  // Nanay's birth certificate
  'https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view?usp=sharing': [
    'GQJK-G8W:birthDate',
    'GQJK-G8W:birthPlace',
    'GQJK-G8W:firstName',
    'GQJK-G8W:gender',
    'GQJK-G8W:lastName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:GHBD-7M4:parentChild',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GQJK-G8W:GHB8-J1B:parentChild',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',
  ],
  // Nanay's death certificate
  'https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view?usp=sharing': [
    'GQJK-G8W:deathDate',
    'GQJK-G8W:deathPlace',
    'GQJK-G8W:living',
  ],
  'https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH': [
    'GHB8-SQN:deathDate',
  ],
  'https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ': [
    'LLQS-641:LLQS-6F1:partner',
  ],
  // Geni Record for Lolo Miguel Maramba
  'https://www.geni.com/people/Miguel-Maramba/4012194445110022663': [
    'LLQS-641:birthDate',
    'LLQS-641:L281-614:parentChild',
    'LLQS-641:LLQS-6YC:parentChild',
  ],
  // FamilySearch: Lolo Felomino death record
  'https://www.familysearch.org/ark:/61903/1:1:HYTD-R5ZM': [
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',
    'GH12-DRN:deathPlace',
    'GH12-DRN:deathDate',
  ],
  'https://www.familysearch.org/tree/pedigree/landscape/G4MF-WD8': [
    'GHB8-5K8:G4MF-S3R:parentChild',
    'GHB8-5K8:G4MF-WD8:parentChild',
  ],
  // Manuel Ajesta and Ursula badoles in son's catholic record
  'https://www.familysearch.org/ark:/61903/1:1:6JG6-3YRH': [
    'GH12-XX4:GH12-HQN:partner',
    'GH12-HQN:GKBT-9GD:parentChild',
    'GH12-XX4:GKBR-M9Y:parentChild',
  ],
  // Lola Estebana Death Certificate
  'https://drive.google.com/file/d/1yf_M5CJgnXsHGFvFmF5Uzfp4YrsAnfUY/view?usp=sharing': [
    'GHB8-RCH:birthPlace',
    'GHB8-RCH:deathDate',
    'GHB8-RCH:deathPlace',
    'GHB8-RCH:firstName',
    'GHB8-RCH:gender',
    'GHB8-RCH:lastName',
    'GHB8-RCH:living',
  ],
  // Lola Lydia Birth Certificate
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view?usp=sharing': [
    'GHBZ-YVX:birthDate',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:living',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHBZ-YVX:GHB8-GZL:parentChild',
  ],
  // Lola Lydia marriage certificate with Lolo Marcial
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing': [
    'GHBZ-YVX:GQJK-LCT:partner',
  ],
  // FamilySearch: Lola Marcial marriage record
  'https://www.familysearch.org/ark:/61903/1:1:HBBK-QDMM': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',
    'GHB8-GZL:firstName',
    'GHB8-GZL:lastname',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',
    'GHBZ-YVX:gender',
    'GHBZ-P5Q:gender',
    'GHBZ-TM4:gender',
    'GHB8-7T6:gender',
    'GHB8-GZL:gender',
    'GHB8-7T6:GHB8-GZL:partner',
    'GHBZ-TM4:GHBZ-P5Q:partner',
    'GHBZ-YVX:GQJK-LCT:partner',
    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHBZ-YVX:GHB8-GZL:parentChild',
    'GQJK-LCT:GHBZ-P5Q:parentChild',
    'GQJK-LCT:GHBZ-TM4:parentChild',
  ],
  // Lolo Marcial's grave headstone photo
  'https://drive.google.com/file/d/1x1M6Z1asZU99nMTdtKYdfDxY_w_s2Gnc/view?usp=share_link': [
    'GQJK-LCT:birthDate',
    'GQJK-LCT:deathDate',
    'GQJK-LCT:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:living',
  ],
  // Lolo Sotero's grave headstone photo, together with
  // Lola Cresing and Lola Catalina
  'https://drive.google.com/file/d/1AeoNewX7fEeAaihfBI3Tz6kNA9ia0m-D/view?usp=share_link': [
    'GHB8-GB6:birthDate',
    'GHB8-GB6:deathDate',
    'GHB8-GB6:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-GB6:living',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
    'GHBD-9LY:firstName',
    'GHBD-9LY:birthDate',
    'GHBD-9LY:deathDate',
    'GHBD-9LY:living',
    'GHBD-9LY:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-J1B:firstName',
    'GHB8-J1B:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-J1B:living',
  ],
  // Lolo Manuel and Lola Catalina's marriage certificate
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?usp=share_link': [
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:gender',
    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHBD-7M4:GHBD-9L6:parentChild',
    'GHB8-J1B:GHBD-7M4:partner',
    'GHB8-DXY:GHBD-9L6:partner',
    'GHB8-GB6:GHBD-9LY:partner',
    'GHB8-J1B:GHB8-GB6:parentChild',
    'GHB8-J1B:GHBD-9LY:parentChild',
    'GHB8-DXY:gender',
    'GHBD-9L6:gender',
    'GHB8-GB6:gender',
    'GHBD-9LY:gender',
  ],
  // Lolo Manuel Jr. California deaths and burials record
  'https://www.familysearch.org/ark:/61903/1:1:HGZ8-33ZM': [
    'GHBD-7M4:living',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:deathDate',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:deathPlace',
    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHBD-7M4:GHBD-9L6:parentChild',
  ],
  // Death Certificate ni Lolo Manuel Sr.
  'https://drive.google.com/file/d/1JuyRHuSaar2p3RM0nUjWX-KPMAGjk2FK/view?usp=sharing': [
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:birthDate',
    'GHBD-9L6:deathDate',
    'GHBD-9L6:deathPlace',
    'GHBD-9L6:living',
    'GHBD-9L6:marker',
  ],
  // Birth certificate ni Lolo Ben
  'https://drive.google.com/file/d/1u-7tnWjKdZ5-GrdLKuKi-NOAVvty25Qo/view?usp=sharing': [
    'GHBD-9L6:birthPlace',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-DXY:birthPlace',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9L6:GHB8-DXY:partner',
  ],
  // Social Security index ni Lola Nati
  'https://www.myheritage.com/research/record-10002-81189365-/natividad-san-agustin-acosta-in-us-social-security-death-index-ssdi': [
    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
    'GHB8-DXY:living',
  ],
  // Marriage certificate ni Lolo Manuel Sr. and Lola Nati
  'https://drive.google.com/file/d/1L4zy5f_l9gYFBQQ68WdVFLDunwFoKgru/view?usp=sharing': [
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',

    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',

    'GHB8-SQN:GHB8-5K8:partner',

    'GHB8-LCC:firstName',
    'GHB8-LCC:lastName',
    'GHB8-LCC:gender',

    'GHB8-H7K:firstName',
    'GHB8-H7K:lastName',
    'GHB8-H7K:gender',

    'GHB8-LCC:GHB8-H7K:partner',

    'GHBD-9L6:birthPlace',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-DXY:birthPlace',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9L6:GHB8-DXY:partner',
    'GHBD-9L6:GHB8-SQN:parentChild',
    'GHBD-9L6:GHB8-5K8:parentChild',
    'GHB8-DXY:GHB8-LCC:parentChild',
    'GHB8-DXY:GHB8-H7K:parentChild',
  ],
  // FamilySearch: Death record ni Lolo Bio
  'https://www.familysearch.org/ark:/61903/1:1:HR2D-1GN2': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
  ],
  // Death certificate ni Lolo Bio
  'https://drive.google.com/file/d/1SQy34nGR1Z5-AqNSZDInfkewArzP_xqp/view?usp=share_link': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:middleName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
    'GHBZ-TM4:GHB8-RCH:parentChild',
    'GHBZ-TM4:marker',
    'GHBZ-TM4:gender',
  ],
  // Death certificate ni Lolo Felomino
  'https://drive.google.com/file/d/1BK3uw-U_2ONst68_V7wUXFQWzzlu0pFc/view?usp=share_link': [
    'GH12-DRN:firstName',
    'GH12-DRN:middleName',
    'GH12-DRN:lastName',
    'GH12-DRN:deathDate',
    'GH12-DRN:deathPlace',
    'GH12-DRN:living',
    'GH12-DRN:gender',
    'GH12-DRN:marker',
    'GH12-DRN:GH12-3GN:partner',
    'GH12-SVQ:GH12-DRN:parentChild',
  ],
  // Tito Darne's birth certificate
  'https://drive.google.com/file/d/1jYZqUHatNlvgDuyFw7jxSwgZsE6jy_9V/view?usp=sharing': [
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:birthDate',
    'GHB5-XTZ:birthPlace',

    'GHB5-XTZ:GH12-9F6:parentChild',
    'GH12-9F6:firstName',
    'GH12-9F6:lastName',
    'GH12-9F6:gender',

    'GHB5-XTZ:GH12-SVQ:parentChild',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:gender',

    'GH12-9F6:GH12-SVQ:partner',
  ],
  // Tita Mylen's birth certificate
  'https://drive.google.com/file/d/1J6wUo6AwrS5aO9LJWbh8CUReaRTkUEFF/view?usp=sharing': [
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:firstName',
    'GH12-Z3C:lastName',
    'GH12-Z3C:gender',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',
    'GH12-W17:gender',

    'GH12-Z3C:GH12-W17:partner',
  ],
  // FamilySearch: record of Corazon Maramba including her parents
  'https://www.familysearch.org/ark:/61903/1:1:HBNK-LY2M': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',
    'GHBD-9LY:lastName',
  ],
  // News article regarding Lolo Sotero being the chief in the police force
  // caputuring some trouble makers near a train station
  'https://drive.google.com/file/d/15o0fdYYMYTzXQ3ikiMCOqy-YlfAND76C/view?usp=sharing': [
    'GHB8-GB6:marker',
  ]
};
