import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    console.log("started by jenkins as changes done in code")
  await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-1');
  await page.getByTestId('basic-form').click();
  await page.getByTestId('form-reset').click();
  await page.getByTestId('form-submit').click();
  await page.getByRole('link', { name: 'Checkboxes & Radio Buttons' }).click();
  await page.getByText('Choice One').click();
  await page.getByTestId('radio-1').check();
  await page.getByText('Choice Two').click();
  await page.getByTestId('radio-2').check();
  await page.getByTestId('radio-result').click();
  await page.getByText('Check to reveal hidden text').click();
  await page.getByTestId('reveal-checkbox').check();
  await page.getByText('Select All').click();
  await page.getByTestId('select-all').check();
  await page.getByTestId('multi-select').selectOption('java');
  await page.getByTestId('multi-select').selectOption('javascript');
  await page.getByTestId('multi-select').selectOption('csharp');
  await page.getByTestId('multi-select').selectOption('python');
  await page.getByTestId('standard-select').selectOption('red');
  await page.getByTestId('standard-select-result').click();
  await page.getByTestId('ajax-btn').click();
  console.log("stopped");
  
});
