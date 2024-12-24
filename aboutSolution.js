```javascript
// pages/about.js
import {env} from 'next/env';

export default function About() {
  console.log(env.MY_CUSTOM_VARIABLE);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Environment Variable: {env.MY_CUSTOM_VARIABLE}</p>
    </div>
  );
}
```

**Create a `.env.local` file in the root directory of your project and add your environment variable:**

```
MY_CUSTOM_VARIABLE=myValue
```