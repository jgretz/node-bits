import chalk from 'chalk';

const doLog = (color, args) => {
  let message = Array.prototype.slice.call(args, 0).join(' ');
  if (color) {
    message = color(message);
  }

  console.log(message);
};

export const log = function() { doLog(null, arguments); };
export const logWarning = function() { doLog(chalk.yellow, arguments); };
export const logError = function() { doLog(chalk.red, arguments); };
