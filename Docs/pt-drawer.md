# Profile Drawer Implementation Plan

## Overview
This document outlines the implementation plan for the profile drawer feature, which displays detailed creator information in an expanding modal with opacity fade backdrop.

## Requirements
- [x] Expanding drawer modal with black 45% opacity fade backdrop
- [x] Multiple states: Default, Saved with sidebar (Overview tab), Saved with sidebar (Messages tab), Saved with collapsed sidebar
- [x] Social performance stats per platform
- [x] Horizontally scrollable tables with platform-specific columns
- [x] Consistent mock data per profile

## Components to Build

### 1. Drawer Container
- [x] Modal wrapper with black 45% opacity overlay
- [x] Animation for expand/collapse
- [x] Close button and navigation controls
- [x] Save to collection functionality

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
- [x] Collapsible sidebar
- [x] Campaign metrics summary
- [x] Tabs for Messages, Campaigns, Custom attributes, Notes
- [x] Message composer
- [x] Toggle for expand/collapse

### 5. State Management
- [x] Default state
- [x] Saved state with sidebar (Overview tab)
- [x] Saved state with sidebar (Messages tab)
- [x] Saved state with collapsed sidebar

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
- [x] Create tabs for different sections
- [x] Implement message composer

### Phase 4: State Management ✅
- [x] Connect save button to state changes
- [x] Handle tab switching
- [x] Implement sidebar collapse/expand

### Phase 5: Mock Data & Polish
- [x] Create consistent mock data for each profile
- [x] Apply styling and animations
- [ ] Test across different profiles and states

## Implementation Details

### Components Created
1. **ProfileDrawer.tsx**: Main component for the profile drawer with all states and tabs
2. **Extended mockData.ts**: Added platform-specific stats and expanded creator data

### Key Features
1. **Multiple States**:
   - Default view shows creator details with "Save to collection" button
   - Saved view shows details with management sidebar
   - Sidebar can be collapsed/expanded
   - Different tabs (Overview, Messages, etc.) show different content

2. **Social Performance**:
   - Summary view shows aggregated stats across platforms
   - Detailed tables show platform-specific metrics
   - Tables scroll horizontally for more metrics

3. **Content Samples**:
   - Grid layout with platform indicators
   - Shows follower counts and platform logos

4. **Save Functionality**:
   - Updates global state when a creator is saved
   - Persists across the application

### Next Steps
1. Test all state transitions thoroughly
2. Add real images for content samples
3. Enhance the mobile responsiveness
4. Add more detailed mock data for platform stats
