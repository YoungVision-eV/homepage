import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const webServer = process.env.PLAYWRIGHT_TEST_BASE_URL
	? undefined
	: {
			command: 'pnpm run build && pnpm run preview',
			port: 4173,
			// optimizing images takes a long time
			timeout: 420 * 1000
	  };

const config: PlaywrightTestConfig = {
	webServer,
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		},
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		},
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5']
			}
		}
	],
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	reporter: [[process.env.CI ? 'github' : 'list'], ['html']]
};

export default config;
