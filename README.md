# Next.js 15 Environment Variable Access Issue

This repository demonstrates a bug encountered when accessing environment variables in Next.js 15 pages other than the main page (pages/index.js).

## Bug Description

Attempting to access environment variables within a non-main page component results in an error, suggesting that environment variables are not properly loaded or defined for those pages.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You will see an error in the browser console.

## Solution

The solution involves properly configuring and loading the environment variables in Next.js 15. The correct approach is to use `next/env` as demonstrated in the corrected file.  Refer to the file aboutSolution.js in this repository for the solution.