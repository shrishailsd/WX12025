# Banking CRM Logging Guide

## Overview
The Banking CRM application features an enhanced logging system with unique filterable keys that make debugging and monitoring much easier.

## Log Format
All logs follow this format:
```
[BANKING-CRM][LEVEL][KEY] Message
```

Where:
- **BANKING-CRM**: Application identifier
- **LEVEL**: Log level (INFO, WARN, ERROR, DEBUG, CRM)
- **KEY**: Unique identifier for the type of operation

## Filtering Logs in Console

### Filter by Category
```javascript
// Show only CRM operations
console.log("Filter: [BANKING-CRM][CRM]")

// Show only UI updates
console.log("Filter: [BANKING-CRM][INFO][UI-")
```

### Console Filter Examples
In your browser's developer console, use the filter box with these patterns:

1. **Customer Operations**: `[BANKING-CRM][CRM][CUSTOMER-`
2. **UI Updates**: `[BANKING-CRM][INFO][UI-`
3. **Error Tracking**: `[BANKING-CRM][ERROR]`

## Available Log Keys

### CRM Operations
- `CUSTOMER-SEARCH`: Customer search actions
- `CUSTOMER-SELECT`: Customer selection
- `CUSTOMER-NOTE`: Customer notes
- `UI-TAB`: Tab switching
- `UI-UPDATE`: UI updates
- `ERROR`: Error tracking

### CRM Operations
- `CUSTOMER-SEARCH`: Customer search operations
- `CUSTOMER-SELECT`: Customer selection
- `CUSTOMER-AUTO-SELECT`: Automatic customer selection

### UI & Application
- `UI-UPDATE`: General UI updates
- `APP-INIT`: Application initialization
- `DOM-READY`: DOM loading
- `ENV-INFO`: Environment information

### Error Handling
- `ERROR-GLOBAL`: Global error catching
- `ERROR-PROMISE`: Promise rejection handling

## Usage Examples

### Development Debugging
```javascript
// Monitor only customer operations during testing
// Filter: [BANKING-CRM][CRM]

// Track UI updates
// Filter: [BANKING-CRM][INFO][UI-

// Debug customer operations
// Filter: [BANKING-CRM][DEBUG][CUSTOMER-
```

### Production Monitoring
```javascript
// Monitor errors only
// Filter: [BANKING-CRM][ERROR]

// Track critical operations
// Filter: [BANKING-CRM][WARN]
```

### Feature Development
```javascript
// When working on customer features
// Filter: [BANKING-CRM][CRM][CUSTOMER-

// When working on UI updates
// Filter: [BANKING-CRM][INFO][UI-
```

## Best Practices

1. **Use Specific Filters**: Instead of viewing all logs, use specific key filters
2. **Combine Filters**: Use multiple filter terms for complex debugging
3. **Save Filter Presets**: Save commonly used filter patterns
4. **Progressive Filtering**: Start broad ([BANKING-CRM][INFO]) then narrow down

## Adding New Log Keys

When adding new functionality, use descriptive keys:
```javascript
// Good examples
Logger.info('New feature started', 'FEATURE-INIT', data);
Logger.crm('Advanced search completed', 'CUSTOMER-ADVANCED-SEARCH', results);

// Follow the pattern: CATEGORY-ACTION or CATEGORY-COMPONENT
```

This logging system makes debugging much more efficient by allowing developers to focus only on relevant log messages during development and troubleshooting.
