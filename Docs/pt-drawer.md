# Profile Drawer Implementation Plan

## Overview
This document outlines the implementation plan for the profile drawer feature, which displays detailed creator information in an expanding modal with opacity fade backdrop. The drawer includes navigation controls, content display, and account management features.

## Requirements
- [x] Expanding drawer modal with black 45% opacity fade backdrop
- [x] Multiple states: Default, Saved with sidebar (Overview tab), Saved with sidebar (Messages tab), Saved with collapsed sidebar
- [x] Social performance stats per platform
- [x] Horizontally scrollable tables with platform-specific columns
- [x] Consistent mock data per profile
- [x] Profile navigation with up/down buttons
- [x] Save button that changes to "Saved" when saved
- [x] Proper UI for showing/hiding the management sidebar
- [x] Global state management for saved creators
- [x] Seamless navigation between profiles without drawer closing

## Components to Build

### 1. Drawer Container
- [x] Modal wrapper with black 45% opacity overlay
- [x] Animation for expand/collapse
- [x] Close button and navigation controls (up/down buttons)
- [x] Save to collection functionality with state change to "Saved" when activated

### 2. Creator Profile Header
- [x] Profile image
- [x] Creator name with verification badge
- [x] "Open to cooperation" badge
- [x] Contact information (email, location, phone)
- [x] Tag management

### 3. Main Content Area
- [x] Default attributes section
- [x] Social performance summary
- [x] Platform-specific stats tables (horizontally scrollable)
- [x] Content sample grid

### 4. Management Sidebar
- [x] Collapsible sidebar with toggle button
- [x] Sidebar header with "Account manager" title
- [x] Tabs with Overview, Messages, and Notes
- [x] Campaign list in Overview tab
- [x] Attributes section in Overview tab
- [x] Message history and composer in Messages tab
- [x] Notes section in Notes tab

### 5. State Management
- [x] Default state
- [x] Saved state with sidebar (Overview tab)
- [x] Saved state with sidebar (Messages tab)
- [x] Saved state with collapsed sidebar
- [x] Navigation between profiles (prev/next)
- [x] Global state for saved creators that persists across the application

## Data Structure
- [x] Create consistent mock data model for each profile
- [x] Include social performance metrics
- [x] Platform-specific statistics
- [x] Message history

## Implementation Phases

### Phase 1: Basic Structure ✅
- [x] Create drawer component with overlay
- [x] Implement basic layout with header section
- [x] Add close and save buttons

### Phase 2: Main Content ✅
- [x] Build social performance section
- [x] Create horizontally scrollable tables
- [x] Implement content samples grid

### Phase 3: Management Sidebar ✅
- [x] Build collapsible sidebar
- [x] Create tabs for different sections (Overview, Messages, Notes)
- [x] Implement message composer

### Phase 4: State Management ✅
- [x] Connect save button to state changes (changes to "Saved" when saved)
- [x] Handle tab switching
- [x] Implement sidebar collapse/expand with proper UI controls
- [x] Implement global state for tracking saved creators

### Phase 5: Navigation & Polish ✅
- [x] Create consistent mock data for each profile
- [x] Apply styling and animations
- [x] Add profile navigation (up/down buttons)
- [x] Implement integration with creator cards for seamless navigation
- [x] Fix bug with navigation buttons closing drawer instead of switching profiles

## Implementation Details

### Components Created
1. **ProfileDrawer.tsx**: Main component for the profile drawer with all states and tabs
2. **Extended mockData.ts**: Added platform-specific stats and expanded creator data
3. **Updated CreatorCard.tsx**: Added integration with ProfileDrawer for navigation
4. **Updated Home component**: Added state management for tracking active creators and saved status

### Key Features
1. **Multiple States**:
   - Default view shows creator details with "Save to collection" button
   - Saved view shows details with "Saved" button and management sidebar
   - Sidebar can be collapsed/expanded with proper UI controls
   - Different tabs (Overview, Messages, Notes) show different content

2. **Profile Navigation**:
   - Up/down buttons next to close button for navigating between profiles
   - Seamless transition between profiles in search results without drawer closing
   - Custom events to trigger profile drawer opening for selected creators
   - Direct profile switching with event propagation to prevent drawer closing

3. **Social Performance**:
   - Summary view shows aggregated stats across platforms
   - Detailed tables show platform-specific metrics
   - Tables scroll horizontally for more metrics

4. **Content Samples**:
   - Grid layout with platform indicators
   - Shows follower counts and platform logos

5. **Management Sidebar**:
   - Overview tab with campaigns and attributes
   - Messages tab with conversation history and composer
   - Notes tab for future implementation
   - Toggle button to collapse/expand sidebar

6. **Global State Management**:
   - Updates global state when a creator is saved
   - Persists saved status across the application
   - Synchronizes UI state across components
   - Maintains consistent saved state when navigating between profiles

### Bug Fixes
1. **Navigation Buttons Closing Drawer** ✅:
   - Previous implementation was closing the drawer before opening the next profile
   - Fixed by adding state in the CreatorCard component to track the current displayed creator
   - Navigation buttons now simply update this state without closing the drawer
   - Simplified approach provides a seamless transition between profiles

### Next Steps
1. Test all state transitions thoroughly
2. Add real images for content samples
3. Enhance the mobile responsiveness
4. Add more detailed mock data for platform stats
5. Implement Notes functionality in the sidebar
