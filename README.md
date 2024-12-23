# Busca CEP - NuxtJS Experiment

## About the Project

This project was developed as an experimental learning experience with NuxtJS framework. Throughout its development, core functionalities and the framework's base color system were explored, allowing for a deeper understanding of its capabilities.

## Demo

[Check demo here](https://buscacep.mathandrade.com/)

## Features

- Address lookup through CEP (Brazilian postal code)
- Integration with ViaCep API
- Google Maps integration for location visualization
- Responsive design

## Technologies Used

- **Framework:** NuxtJS 3.14
- **UI Library:** PrimeVue
- **Styling:** Tailwind CSS
- **APIs:**
  - ViaCep (Brazilian postal code service)
  - Google Maps

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/dedioficial/busca-cep-nuxt.git
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Add the Google Maps API Key to the `.env`

```
GOOGLE_MAPS_API_KEY=12345
```

4. Run development server

```bash
npm run dev
# or
yarn dev
```

## Third-Party API Integration

This project integrates with:

- **ViaCep API:** Used for Brazilian postal code lookup and address information
- **Google Maps API:** Used for geographic visualization of addresses
