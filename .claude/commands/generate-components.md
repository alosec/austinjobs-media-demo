# Generate Business Components

Create business-specific UI components based on requirements and best practices.

## Usage
```
/generate-components [component-type] [business-requirements]
```

## What This Command Does

1. **Analyze Requirements**: Parse business needs for UI components
2. **Create Components**: Generate React components with TypeScript
3. **Add Styling**: Create component-level CSS with variables
4. **Setup Routing**: Configure Astro pages and API routes
5. **Integrate Auth**: Add authentication checks where needed

## Component Types

### Authentication Components
- **AuthForm**: Login/registration form with validation
- **UserProfile**: Account management and settings
- **ProtectedRoute**: Wrapper for authenticated pages

### Business-Specific Components
Will be generated based on business requirements:
- **Restaurant**: MenuDisplay, ReservationForm, TableManager
- **Retail**: ProductCatalog, ShoppingCart, InventoryManager
- **Service**: ServiceBooking, ClientManager, ScheduleView
- **Events**: EventCalendar, AttendeeManager, VenueSelector

### Layout Components
- **Header**: Navigation with authentication state
- **Sidebar**: Dashboard navigation menu
- **Footer**: Site footer with business information
- **Dashboard**: Main layout for authenticated users

## Implementation Pattern

### Component Structure
Each component follows the pedicalendar_v2 pattern:

```
ComponentName/
├── ComponentName.tsx    # React component logic
├── ComponentName.css    # Component-specific styles
├── types.ts            # TypeScript interfaces
└── index.ts            # Clean exports
```

### Component Template
```typescript
// ComponentName.tsx
import React, { useState } from 'react';
import './ComponentName.css';
import type { ComponentNameProps } from './types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  const [state, setState] = useState(initialState);

  return (
    <div className={`component-name component-name--${variant} component-name--${size}`}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### CSS Template
```css
/* ComponentName.css */
.component-name {
  --component-primary: var(--color-primary);
  --component-spacing: var(--space-md);
  --component-radius: var(--border-radius);
  
  display: flex;
  padding: var(--component-spacing);
  border-radius: var(--component-radius);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.component-name--primary {
  --component-primary: var(--color-primary);
}

.component-name--secondary {
  --component-primary: var(--color-secondary);
}

.component-name--small {
  --component-spacing: var(--space-sm);
}

.component-name--large {
  --component-spacing: var(--space-lg);
}

.component-name:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

### Type Definitions
```typescript
// types.ts
export interface ComponentNameProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onAction?: (data: ActionData) => void;
}

export interface ActionData {
  // Define action data structure
}
```

## Business-Specific Generation

### Restaurant Business
```typescript
// Generated components for restaurant:
- MenuDisplay: Show menu items with categories and prices
- ReservationForm: Table booking with date/time selection
- TableManager: Staff interface for table status
- OrderTracker: Real-time order status updates
```

### E-commerce Business
```typescript
// Generated components for retail:
- ProductGrid: Product catalog with filtering
- ProductCard: Individual product display
- ShoppingCart: Cart management with totals
- CheckoutForm: Payment and shipping details
```

### Service Business
```typescript
// Generated components for services:
- ServiceBooking: Appointment scheduling interface
- ClientDirectory: Customer management dashboard
- ServicePackages: Service offerings display
- StaffSchedule: Staff availability calendar
```

## API Integration

### Data Fetching Pattern
```typescript
// Custom hooks for data fetching
export const useBusinessData = (businessId: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBusinessData(businessId)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [businessId]);

  return { data, loading, error };
};
```

### API Route Generation
```typescript
// pages/api/[resource]/index.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ request }) => {
  // Implementation for GET requests
};

export const POST: APIRoute = async ({ request }) => {
  // Implementation for POST requests
};
```

## Styling Integration

### CSS Variables Usage
```css
/* Business-specific theme variables */
:root {
  --business-primary: #FF6B35;      /* Restaurant orange */
  --business-secondary: #2C5F3F;    /* Deep green */
  --business-accent: #FFD23F;       /* Golden yellow */
}

/* Component adapts to business theme */
.menu-item {
  border-left: 4px solid var(--business-primary);
  background: linear-gradient(135deg, 
    var(--business-secondary)22, 
    var(--business-accent)22);
}
```

### Responsive Design
```css
/* Mobile-first responsive patterns */
.component-name {
  /* Mobile styles (default) */
  flex-direction: column;
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .component-name {
    /* Tablet styles */
    flex-direction: row;
    padding: var(--space-md);
  }
}

@media (min-width: 1024px) {
  .component-name {
    /* Desktop styles */
    padding: var(--space-lg);
  }
}
```

## Success Criteria

- ✅ Components generated based on business requirements
- ✅ TypeScript interfaces match data models
- ✅ Component-level CSS with proper theming
- ✅ Responsive design for mobile and desktop
- ✅ Authentication integration where needed
- ✅ API routes created for data operations
- ✅ Error handling and loading states included

## Next Steps

After running this command:
1. Test components in development environment
2. Integrate with Supabase data
3. Add business-specific validation rules
4. Run `/deploy-check` to verify production readiness

## Component Library

### Available Base Components
- Button: Primary, secondary, and accent variants
- Input: Text, email, password, and textarea
- Modal: Overlay dialogs with backdrop
- Card: Content containers with shadows
- Table: Data display with sorting and pagination
- Form: Validation and submission handling

### Customization Options
- Color themes based on business branding
- Typography scale and font choices
- Spacing and layout preferences
- Animation and transition styles