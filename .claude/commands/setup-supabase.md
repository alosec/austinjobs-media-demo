# Setup Supabase Project

Automate Supabase project creation and configuration for business sites.

## Usage
```
/setup-supabase
```

## What This Command Does

1. **Create Supabase Project**: Uses MCP server to create new project
2. **Configure Authentication**: Enable email/password auth and set up RLS
3. **Generate Schema**: Create business-specific database tables
4. **Setup Environment**: Configure local environment variables
5. **Generate Types**: Create TypeScript types from database schema

## Implementation

### Step 1: Create Project
Use the Supabase MCP server to create a new project:

```typescript
// Get organization ID for project creation
const orgs = await mcp_supabase_list_organizations();
const targetOrg = orgs[0]; // Use first organization

// Get cost estimate and confirm
const cost = await mcp_supabase_get_cost({
  type: 'project',
  organization_id: targetOrg.id
});

const confirmation = await mcp_supabase_confirm_cost({
  type: 'project',
  recurrence: cost.recurrence,
  amount: cost.amount
});

// Create the project
const project = await mcp_supabase_create_project({
  name: PROJECT_NAME,
  organization_id: targetOrg.id,
  confirm_cost_id: confirmation.id,
  region: 'us-east-1' // Default region
});
```

### Step 2: Configure Authentication
Enable authentication and set up row-level security:

```sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for business isolation
CREATE POLICY "business_isolation" ON users
  FOR ALL USING (business_id = auth.jwt() ->> 'business_id');

-- Configure auth settings
UPDATE auth.config SET
  site_url = 'https://PROJECT_NAME.pages.dev',
  email_confirm = true,
  signup_enabled = true;
```

### Step 3: Create Business Schema
Generate database tables based on business requirements:

```sql
-- Core business table
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users table with business association
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  business_id UUID REFERENCES businesses(id),
  email TEXT NOT NULL,
  role TEXT DEFAULT 'staff' CHECK (role IN ('admin', 'manager', 'staff')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business-specific tables will be added based on requirements
```

### Step 4: Environment Configuration
Set up local environment variables:

```bash
# Add to .env.local
SUPABASE_URL=https://PROJECT_ID.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 5: Generate TypeScript Types
Create type definitions from database schema:

```typescript
// This will be generated automatically
export interface Database {
  public: {
    Tables: {
      businesses: {
        Row: { /* ... */ }
        Insert: { /* ... */ }
        Update: { /* ... */ }
      }
      users: {
        Row: { /* ... */ }
        Insert: { /* ... */ }
        Update: { /* ... */ }
      }
    }
  }
}
```

## Success Criteria

- ✅ Supabase project created and accessible
- ✅ Authentication configured with RLS policies
- ✅ Database schema matches business requirements
- ✅ Environment variables configured locally
- ✅ TypeScript types generated and imported
- ✅ Local development can connect to database

## Next Steps

After running this command:
1. Update `src/lib/supabase.ts` with project credentials
2. Test authentication flow locally
3. Run `/generate-components` to create UI components
4. Verify database connections work correctly

## Troubleshooting

### Common Issues
- **Organization not found**: Check Supabase account access
- **Cost confirmation fails**: Verify billing setup
- **RLS policies fail**: Check table existence and syntax
- **Type generation fails**: Ensure database connection works

### Verification Commands
```bash
# Test database connection
npm run supabase:test

# Verify environment variables
npm run env:check

# Generate types manually
npm run types:generate
```