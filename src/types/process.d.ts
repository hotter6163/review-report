declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: string;
        GITHUB_ID: string;
        GITHUB_SECRET: string;
      }
    }
  }
}
