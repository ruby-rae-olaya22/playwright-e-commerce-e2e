import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import dotenv from 'dotenv';
import { beforeEach } from 'node:test';

dotenv.config();

const VALID_USERNAME = process.env.USERNAME_login!;
const VALID_PASSWORD = process.env.PASSWORD_login!;
const LOGIN_URL = /.*auth\/login/;
const DASHBOARD_URL = /.*dashboard\/index/;

// OrangeHRM demo site can be slow — increase assertion timeout
const SLOW_EXPECT_TIMEOUT = { timeout: 15_000 };

// ============================================================
// 1. POSITIVE SCENARIOS
// ============================================================
test.describe('Positive Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
        await expect(page).toHaveURL(DASHBOARD_URL, SLOW_EXPECT_TIMEOUT);

        await expect(page).toHaveTitle('OrangeHRM');
        await expect(loginPage.clientBanner).toBeVisible(SLOW_EXPECT_TIMEOUT);
    });
});