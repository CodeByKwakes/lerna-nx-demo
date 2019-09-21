module.exports = {
  name: 'weapon',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/weapon',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
