# Archive Design System

## Overview

The Archive design system is built with a focus on consistency, scalability, and usability. It provides a unified approach to styling across the application, ensuring visual coherence and developer efficiency. This document outlines our design tokens, component patterns, and implementation guidelines.

## Design Tokens

Design tokens are the foundational visual elements that define our design system. They represent the smallest visual attributes and are used to maintain consistency across the application.

### Color System

Our color system is built around semantic tokens that represent functionality rather than visual appearance. This allows for more flexible theming and better accessibility.

#### Primary Colors

```css
--primary-blue: #3b82f6;
--primary-purple: #8b5cf6;
```

Primary colors are used for primary actions, links, and focus states. They represent the brand's core identity.

#### Gray Scale

```css
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

The gray scale provides a range of neutrals for text, backgrounds, borders, and other UI elements. It forms the backbone of our visual hierarchy.

#### Extended Color Tokens (Proposed)

Below are the proposed extended color tokens that will replace hard-coded color values throughout the application:

##### Surface Colors
```css
--surface-default: white;
--surface-light: #fafafa;
--surface-muted: #f5f5f5;
```

##### Status Colors
```css
--status-blue: #005EF1;
--status-blue-light: #e6f4ff;
--status-green-light: #F0FDF4;
--status-yellow-light: #FFFBEB;
--status-red-light: #FEF2F2;
```

##### Text Colors
```css
--text-primary: #262626;
--text-secondary: #595959;
--text-tertiary: #8c8c8c;
```

##### Component-Specific Colors
```css
--message-outgoing-bg: #e9f5ff;
--message-incoming-bg: #f5f5f5;
--card-border: #e8e8e8;
--card-hover-shadow: rgba(0, 0, 0, 0.06);
```

### Typography

Our typography system uses a variable font scale to maintain readable text across different device sizes and contexts.

```css
--font-family-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-loose: 1.8;
```

### Spacing

Consistent spacing creates visual rhythm and improves usability. Our spacing system uses a 4px base unit.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

### Borders & Shadows

```css
--border-radius-sm: 4px;
--border-radius-md: 6px;
--border-radius-lg: 8px;
--border-radius-xl: 12px;
--border-radius-full: 9999px;

--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.07);
```

## Component Patterns

Our component design follows these core principles:

1. **Consistency**: Components share common visual attributes and behaviors
2. **Modularity**: Components are self-contained and reusable
3. **Accessibility**: Components are designed to be accessible to all users
4. **Responsiveness**: Components adapt gracefully to different screen sizes

### Card Components

Cards follow a consistent pattern with these characteristics:
- 16px border-radius
- Light border: 1px solid var(--gray-200)
- Subtle shadow: var(--shadow-sm)
- Hover state with elevation: transform translateY(-4px) + var(--shadow-lg)
- Standard padding: 16px

### Input Elements

Input fields maintain consistency with these characteristics:
- Height: 32px
- Border-radius: 4px
- Border: 1px solid var(--gray-300)
- Focus state: var(--primary-blue) outline
- Padding: 0 12px (buttons), 0 32px (search with icons)

### Navigation Elements

Navigation items follow these patterns:
- Default state: low contrast color (var(--gray-400))
- Active state: high contrast (var(--gray-900))
- Hover state: accent color (var(--primary-purple))

## Implementation Guidelines

### CSS Architecture

Our CSS follows these principles:

1. **Namespaced Classes**: Class names follow the pattern `[component]-[element]-[modifier]`
2. **Flat Selectors**: Minimize selector specificity and nesting
3. **Single Responsibility**: Each class has a single, clear purpose
4. **Design Token Usage**: Always use design tokens instead of hard-coded values

### Token Migration Strategy

When refactoring hard-coded colors to use design tokens:

1. Map semantically similar colors to appropriate tokens
2. Ensure color shifts are minimal (< 2% perceptual difference)
3. Test after each component is updated
4. Document any intentional visual changes

## Future Improvements

- Implement dark mode using CSS variables
- Create component-specific tokens for more granular theming
- Develop interactive documentation with component examples
- Implement automated visual regression testing
