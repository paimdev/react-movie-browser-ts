export default {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    roots: ["<rootDir>/src"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: "<rootDir>/coverage",
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
    verbose: true,
  };