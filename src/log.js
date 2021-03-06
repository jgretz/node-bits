import _ from 'lodash';
import chalk from 'chalk';
import util from 'util';

/* eslint-disable */
const doLog = (color, args) => {
  let message = _.map(args, a => a instanceof Error ? a.stack : a).join(' ');

  if (color) {
    message = color(message);
  }

  console.log(message);
};

export const log = function() { doLog(null, arguments); };
export const logWarning = function() { doLog(chalk.yellow, arguments); };
export const logError = function() { doLog(chalk.red, arguments); };

export const logFull = function() {
  console.log(util.inspect(arguments, false, null));
}
