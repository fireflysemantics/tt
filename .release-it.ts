import type {Config} from 'release-it';

export default {
  git: {
    //commit: true,
    //tag: true,
    //push: true,
    commitMessage: 'chore: release ${version}',
  },
  github: {
    release: true,
  },
  npm: {
    publish: false,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: {
        name: 'conventionalcommits',
        type: [
          {
            type: 'feat',
            section: 'Features',
          },
          {
            type: 'fix',
            section: 'Bug Fixes',
          },
        ],
      },
    },
  },
} satisfies Config;
