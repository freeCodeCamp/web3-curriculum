export type F<A, R> = (arg: A) => R;

export enum Events {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  TOGGLE_LOADER_ANIMATION = 'toggle-loader-animation',
  UPDATE_TESTS = 'update-tests',
  UPDATE_TEST = 'update-test',
  UPDATE_DESCRIPTION = 'update-description',
  UPDATE_PROJECT_HEADING = 'update-project-heading',
  UPDATE_PROJECTS = 'update-projects',
  RESET_TESTS = 'reset-tests',
  RUN_TESTS = 'run-tests',
  RESET_PROJECT = 'reset-project',
  GO_TO_NEXT_LESSON = 'go-to-next-lesson',
  GO_TO_PREVIOUS_LESSON = 'go-to-previous-lesson',
  SELECT_PROJECT = 'select-project'
}

export type TestType = {
  testText: string;
  passed: boolean;
  isLoading: boolean;
  testId: number;
};

export interface ProjectI {
  id: number;
  title: string;
  description: string;
  isIntegrated: boolean;
  isPublic: boolean;
  currentLesson: number;
  numberOfLessons: number;
  isResetEnabled?: boolean;
}

export type ConsoleError = {
  error: string;
} & TestType;

export type FreeCodeCampConfigI = {
  [key: string]: any;
};
