export * from './date';
export * from './filesize';
export * from './integer';
export * from './join';
export * from './json';
export * from './keys';
export * from './number';
export * from './percentage';
export * from './time';
export * from './truncate';

export function configure(config) {
  config.globalResources(['./date', './filesize', './integer', './join', './json', './keys', './number', './percentage', './time', './truncate']);
}
