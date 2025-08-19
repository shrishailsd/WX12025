
# Banking CRM

A modern web-based Customer Relationship Management (CRM) application for banking customer service operations.


## Features

- **Customer Management**: Search, view, and update customer information
- **Notes and Quick Actions**: Add notes and perform quick actions for customers
- **Real-time Logging**: Comprehensive logging system for debugging and monitoring


## Project Structure

```
├── banking-crm.html      # Main HTML interface
├── banking-crm.css       # Styling and responsive design
├── crm-app.js           # Main JavaScript application logic
├── package.json         # NPM package configuration
├── guide.md            # Implementation guide
├── LOGGING-GUIDE.md    # Logging system documentation
└── logs/               # Application logs directory
```


## Setup Instructions

1. **Prerequisites**
   - Modern web browser
   - Local web server or hosting environment

2. **Installation**
   ```bash
   # Clone the repository
   git clone [your-repo-url]
   cd banking-crm

   # Install dependencies (if any)
   npm install

   # Run setup script
   ./setup-lab.sh
   ```


## Usage

1. Open `banking-crm.html` in a web browser
2. Use the CRM interface to search for customers, view details, add notes, and perform quick actions.

### Customer Management
- **Search**: Find customers by name, phone, or email
- **View Details**: Access comprehensive customer information
- **Update Notes**: Add and save customer interaction notes
- **Case Management**: Create new cases and schedule callbacks

## Technical Details

### Logging System
The application uses a comprehensive logging system with standardized formatting:
- `[BANKING-CRM][INFO]` - General information
- `[BANKING-CRM][DEBUG]` - Debugging information
- `[BANKING-CRM][CRM]` - CRM-specific actions
- `[BANKING-CRM][ERROR]` - Error messages

### Event Handling
- Real-time UI updates based on application state
- Customer interaction tracking

## Development

### Code Structure
- **Logger Utility**: Centralized logging with timestamps and categories
- **UI Management**: Dynamic interface updates and state management
- **CRM Functions**: Customer data management and interaction tracking

### Debugging
Enable browser console and filter by `[BANKING-CRM]` to view application logs.

## Security Notes

- Never commit access tokens or credentials to version control
- Use environment variables for sensitive configuration
- Ensure proper authentication and authorization

## License

Private repository - Internal use only

## Support

For issues or questions, refer to the implementation guide or contact the development team.
