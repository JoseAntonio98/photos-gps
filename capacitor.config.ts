import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'photos.gps',
  appName: 'photos-gps',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
