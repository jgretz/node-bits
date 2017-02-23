import Timer from 'timer-machine-node';
import { log } from './log';

const DEFAULT_TIMER = 'DEFAULT_TIMER';

export const startTimer = (timer = DEFAULT_TIMER, logMethod = log) => {
  Timer.get(timer).start();

  if (logMethod) {
    logMethod(`Timer '${timer}'' started.`);
  }
};

export const toggleTimer = (timer = DEFAULT_TIMER, logMethod = log) => {
  Timer.get(timer).toggle();
  const time = Timer.get(timer).time();

  if (logMethod) {
    logMethod(`Timer '${timer}'' toggled at ${time}.`);
  }

  return time;
};

export const stopTimer = (timer = DEFAULT_TIMER, logMethod = log) => {
  Timer.get(timer).stop();
  const time = Timer.get(timer).time();

  if (logMethod) {
    logMethod(`Timer '${timer}'' stopped at ${time}.`);
  }

  return time;
};
