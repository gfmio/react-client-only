# react-client-only

<!-- Github -->

<p align="center">
  <!-- License -->
  <a href="https://github.com/gfmio/react-client-only/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/gfmio/react-client-only.svg" alt="Github license" title="Github license" />
  </a>
  
  <!-- Open issues -->
  <a href="https://github.com/gfmio/react-client-only/issues">
    <img src="https://img.shields.io/github/issues/gfmio/react-client-only.svg" alt="Open issues" title="Open issues" /
  </a>
  
  <!-- Closed issues -->
  <a href="https://github.com/gfmio/react-client-only/issues?utf8=✓&q=is%3Aissue+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-closed/gfmio/react-client-only.svg" alt="Closed issues" title="Closed issues" />
  </a>
  
  <!-- Open Pull Requests -->
  <a href="https://github.com/gfmio/react-client-only/pulls">
    <img src="https://img.shields.io/github/issues-pr/gfmio/react-client-only.svg" alt="Open Pull Requests" title="Open Pull Requests" />
  </a>
  
  <!-- Closed Pull Requests -->
  <a href="https://github.com/gfmio/react-client-only/pulls?utf8=✓&q=is%3Apr+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-pr-closed/gfmio/react-client-only.svg" alt="Closed Pull Requests" title="Closed Pull Requests" />
  </a>
</p>

<!-- Build & test tools -->

<p align="center">
  <!-- Snyk -->
  <a href="https://snyk.io/test/github/gfmio/react-client-only?targetFile=package.json">
    <img src="https://img.shields.io/snyk/vulnerabilities/github/gfmio/react-client-only.svg" alt="Known Vulnerabilities" title="Known Vulnerabilities">
  </a>

  <!-- David -->
  <a href="#">
    <img src="https://img.shields.io/david/gfmio/react-client-only.svg" alt="Dependencies" title="Dependencies" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/david/dev/gfmio/react-client-only.svg" alt="DevDependencies" title="DevDependencies" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/david/optional/gfmio/react-client-only.svg" alt="OptionalDependencies" title="OptionalDependencies" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/david/peer/gfmio/react-client-only.svg" alt="PeerDependencies" title="PeerDependencies" />
  </a>

  <!-- Code Climate -->
  <a href="https://codeclimate.com/github/gfmio/react-client-only/issues">
    <img src="https://img.shields.io/codeclimate/issues/gfmio/react-client-only.svg" alt="Code Climate issues" title="Code Climate issues" />
  </a>
  <a href="https://codeclimate.com/github/gfmio/react-client-only/maintainability">
    <img src="https://img.shields.io/codeclimate/maintainability/gfmio/react-client-only.svg" alt="Code Climate maintainability" title="Code Climate maintainability" />
  </a>
  <a href="https://codeclimate.com/github/gfmio/react-client-only/maintainability">
    <img src="https://img.shields.io/codeclimate/maintainability-percentage/gfmio/react-client-only.svg" alt="Code Climate maintainability (percentage)" title="Code Climate maintainability (percentage)" />
  </a>
  <a href="https://codeclimate.com/github/gfmio/react-client-only">
    <img src="https://img.shields.io/codeclimate/tech-debt/gfmio/react-client-only.svg" alt="Code Climate technical debt" title="Code Climate technical debt" />
  </a>
</p>

<!-- NPM shields -->

<p align="center">
  <a href="https://www.npmjs.com/package/react-client-only">
    <img src="https://img.shields.io/npm/l/react-client-only.svg" alt="NPM license" title="NPM license" />
  </a>
  <a href="https://www.npmjs.com/package/react-client-only">
    <img src="https://img.shields.io/npm/v/react-client-only.svg" alt="" title="" />
  </a>
  <a href="https://www.npmjs.com/package/react-client-only">
    <img src="https://img.shields.io/npm/dw/react-client-only.svg" alt="" title="" />
  </a>
  <a href="https://www.npmjs.com/package/react-client-only">
    <img src="https://img.shields.io/bundlephobia/minzip/react-client-only.svg" alt="" title="" />
  </a>
  <a href="https://www.npmjs.com/package/react-client-only">
    <img src="https://img.shields.io/npm/types/react-client-only.svg" alt="" title="" />
  </a>
  
  <a href="#">
    <img src="https://img.shields.io/snyk/vulnerabilities/npm/react-client-only.svg" alt="Known Vulnerabilities" title="Known Vulnerabilities">
  </a>  
</p>

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
