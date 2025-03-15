# Archive - Creator Management Platform

## Project Overview

Archive is a creator management platform I designed and built to help brands effectively discover, evaluate, and collaborate with social media influencers. The project was commissioned to solve a critical problem: customers were spending too much time manually managing influencer relationships using spreadsheets. The goal was to create a consolidated creator profile system with comprehensive social data visualization.

[IMAGE: Homepage dashboard showing creator grid and sidebar navigation]

## Client Brief

The client requested a solution that would streamline influencer marketing workflows. The brief outlined specific functionality requirements including reviewing UGC and social profile stats across TikTok, Instagram, and YouTube, creator data management via custom attributes, segment management, and communication capabilities. They emphasized the importance of an intuitive user interface that would replace spreadsheet-based workflows.

[IMAGE: Original client brief and requirements document]

## Design Process

Starting with the client requirements, I created wireframes and high-fidelity mockups in Figma. I analyzed the user journey of influencer marketers, identifying key pain points in their current workflow. The design system was built on Ant Design components, which I customized to create a unique but consistent visual language.

[IMAGE: Figma screenshots showing wireframes and component system]

The most challenging design elements were the profile drawer system and the messaging interface. I iterated through several approaches before landing on a solution that balanced information density with usability.

## Development Approach

With only three days for implementation, I made strategic decisions to maximize output:

**Day 1:** I established the component architecture and design system implementation. Using Next.js 15 with React 19, I built the foundation for the application including the navigation system, creator card components, and search functionality. I configured the TypeScript interfaces to ensure type safety across the application.

[IMAGE: Code structure and component hierarchy]

**Day 2:** I focused on implementing the creator profile features and the messaging system. This involved creating the responsive drawer system that seamlessly transitions between different views. The social performance visualization required careful consideration of data representation to make it intuitive for marketers.

[IMAGE: Screenshot of profile drawer with social stats]

**Day 3:** I devoted the final day to UI polish, performance optimization, and bug fixes. This included refining animations, implementing responsive behaviors, and ensuring consistent styling across the application. I addressed specific challenges like the padding issues in the messaging interface and optimizing the display of creator stats.

[IMAGE: Side-by-side of initial vs. polished UI details]

## Technical Implementation

The application was built using Next.js and React with a strong emphasis on component reusability. For styling, I implemented a custom CSS architecture that maintained clean specificity patterns while allowing for component-specific customizations.

Instead of connecting to backend services in this prototype phase, I created a structured mock data system that mimics real API responses. This approach enabled me to simulate the full functionality without backend dependencies, while ensuring a smooth transition to real data sources in future development.

[IMAGE: Data flow diagram showing mock data integration]

## Key Features Implemented

The prototype successfully delivers the core functionality specified in the brief:

**Creator Discovery Interface** that allows filtering and searching through a database of influencers with detailed profile cards.

**Consolidated Creator Profiles** showing unified data across multiple platforms (Instagram, TikTok, YouTube) with custom attribute management.

**Messaging System** enabling brands to communicate with creators directly within the platform, with conversation history and templates.

**Social Performance Analytics** visualizing key metrics like engagement rates, impressions, and EMV (Earned Media Value) in an easily digestible format.

[IMAGE: Feature showcase with annotations]

## Results and Learnings

Despite the tight three-day timeframe, I delivered a functional prototype that demonstrates the potential of a dedicated creator management platform. The project showcases my ability to rapidly translate requirements into working software while maintaining high standards for code quality and user experience.

Key learnings from this project include effective strategies for CSS architecture in component-based systems, techniques for simulating backend functionality during prototyping, and approaches for optimizing UI performance in data-rich interfaces.

[IMAGE: Final product overview]

This project exemplifies my approach to frontend development: understanding the business problem, creating thoughtful design solutions, and implementing clean, maintainable code that delivers tangible user value.