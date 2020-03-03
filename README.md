# react-client-only

This package provides a utility component and a React hook for only rendering React components in the browser, but not during server-side rendering.

This is useful for static-side generation when trying to avoid rehydration issues, e.g. for components dependent on the current user.

Inspired & based on the examples in [this blog post](https://joshwcomeau.com/react/the-perils-of-rehydration).

## Usage

```tsx
import React from "react";
import { ClientOnly, useClientOnly } from "react-client-only";

const component = () => (
  <div>
    <p>This will render during SSR and on the client.</p>
    <ClientOnly>
      <p>This will render on the client only.</p>
    </ClientOnly>
  </div>
);

// or

const component2 = () => {
  const isOnClient = useClientOnly();

  if (!isOnClient) {
    return null;
  }

  return <p>This will render on the client only.</p>;
};
```

## Install

```sh
# If you're using yarn
yarn add react-client-only

# If you're npm
npm install react-client-only
```
