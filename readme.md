# Shopify Lookbook Challenge

## Overview

This project is a React migration of a Shopify Lookbook feature.

The homepage displays curated lookbooks created using Shopify Metaobjects, while product pages display related products from the same lookbook(s). Product pages support displaying up to two related lookbooks when a product belongs to multiple collections, as required by the challenge.

---

## Features

### Homepage Lookbook

- React-powered homepage lookbook
- Reads data from Shopify Metaobjects
- Uses Shopify Storefront API
- Configurable through Shopify Theme Editor
- Responsive product grid
- Optional compare-at price display

### Product Lookbook

- React-powered "Complete the Look" section
- Automatically detects lookbooks containing the current product
- Displays products from the same lookbook
- Excludes the current product
- Supports up to **two** related lookbooks
- Clickable product cards

---

## Technologies Used

- React
- Vite
- Shopify Theme App structure
- Shopify Storefront API
- Shopify Metaobjects
- Liquid

---

## Project Structure

```
react-lookbook/
│
├── src/
│   ├── components/
│   │   ├── Lookbook.jsx
│   │   ├── ProductLookbook.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── services/
│   │   └── storefront.js
│   │
│   ├── styles/
│   │   └── lookbook.css
│   │
│   ├── App.jsx
│   ├── ProductApp.jsx
│   └── main.jsx
│
└── vite.config.js

shopify-theme/
│
├── assets/
├── sections/
│   ├── lookbook.liquid
│   └── product-lookbook.liquid
│
└── snippets/
```

---

## Architecture

The project separates responsibilities into reusable components.

```
Shopify Metaobjects
        │
        ▼
Liquid Sections
        │
        ▼
React Application
        │
        ▼
Storefront API
        │
        ▼
Reusable ProductCard Components
```

Both the homepage and product page reuse the same ProductCard component and shared Storefront API service.

---

## Setup

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production assets

```bash
npm run build
```

The production build outputs the bundled JavaScript into the Shopify theme assets directory.

---

## Assumptions

- Products are related through Shopify Lookbook Metaobjects.
- A product may belong to multiple lookbooks.
- Product pages display a maximum of two related lookbooks.
- Product information is retrieved using the Shopify Storefront API.

---

## Future Improvements

- Product caching to reduce API requests
- Pagination for larger lookbooks
- Lazy loading product images
- Search and filtering
- Unit and integration testing