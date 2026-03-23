

## Swarm Call List Page

### Overview
New `/swarm-calls` page that fetches a published Google Sheet (CSV) and displays it as a table.

### Changes

1. **`src/pages/SwarmCalls.tsx`** — New page with nav (home icon), fetches CSV on page load, parses it, renders using existing `Table` components. Loading skeleton and error state. No auto-refresh.

2. **`src/App.tsx`** — Add `/swarm-calls` route.

3. **`src/components/Nav.tsx`** — Add "Swarm Calls" nav link.

### Prerequisites
You need to publish your Google Sheet as CSV first (File → Share → Publish to the web → CSV) and share the URL with me.

