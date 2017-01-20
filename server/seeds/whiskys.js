exports.seed = function (knex, Promise) {
  return knex('whisky').del()
    .then(function () {
      return Promise.all([
        knex('whisky').insert({id: 99901, name: 'Glenmorangie Signet', region: ''}),
        knex('whisky').insert({id: 99902, name: 'Nikka Taketsuru 21 Year Old', region: '' }),
        knex('whisky').insert({id: 99903, name: 'GlendDronach 15 Year Old Revival', region: '' }),
        knex('whisky').insert({id: 99904, name: 'Suntory Yamazaki Aged 18 Years', region: '' }),
        knex('whisky').insert({id: 99905, name: 'Eagle Rare 10 Year Old', region: '' }),
        knex('whisky').insert({id: 99906, name: 'Cutty Sark ‘Prohibition Edition’ Blended Scotch Whisky ', region: '' }),
        knex('whisky').insert({id: 99907, name: 'Talisker 18 Year Old', region: '' }),
        knex('whisky').insert({id: 99908, name: 'Kavalan Solist Sherry Cask Matured', region: '' }),
        knex('whisky').insert({id: 99909, name: 'Strathisla 12-Year-Old', region: '' }),
        knex('whisky').insert({id: 99910, name: 'Redbreast 21 Year Old', region: '' }),
        knex('whisky').insert({id: 99911, name: 'LAPHROAIG – 10 years old', region: 'Islay' }),
        knex('whisky').insert({id: 99912, name: 'LAGAVULIN – 16 years old', region: '' }),
        knex('whisky').insert({id: 99913, name: 'BUNNAHABHAIN – 12 years old', region: '' }),
        knex('whisky').insert({id: 99914, name: 'BRUICHLADDICH – 12 years old', region: '' }),
        knex('whisky').insert({id: 99915, name: 'BOWMORE – Legend', region: 'Islay' }),
        knex('whisky').insert({id: 99916, name: 'TALISKER – 10 years old', region: '' }),
        knex('whisky').insert({id: 99917, name: 'GLENFIDDICH – 12 years old', region: '' }),
        knex('whisky').insert({id: 99918, name: 'THE GLENLIVET – 12 years old', region: '' }),
        knex('whisky').insert({id: 99919, name: 'THE GLENLIVET – 18 years old', region: '' }),
        knex('whisky').insert({id: 99920, name: 'GLEN MORAY', region: '' }),
        knex('whisky').insert({id: 99921, name: 'GLENFARCLAS – 10 years old', region: '' }),
        knex('whisky').insert({id: 99922, name: 'GLENDRONACH – 15 years old', region: '' }),
        knex('whisky').insert({id: 99923, name: 'THE BALVENIE – 12 years old', region: '' }),
        knex('whisky').insert({id: 99924, name: 'GLEN GARIOCH – 15 years old', region: '' }),
        knex('whisky').insert({id: 99925, name: 'GLENGOYNE – 10 years old', region: '' })
      ]);
    });
};
