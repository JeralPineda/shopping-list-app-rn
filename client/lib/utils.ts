export const getEnvVariables = () => {
  return {
    apiKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "",
  };
};
