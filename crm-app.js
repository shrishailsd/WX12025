// ...existing code...

/**
 * Banking CRM Application - Main JavaScript Module
 * Handles customer management, search, and CRM functionality
 */

// Unique logging prefix for easy console filtering
const LOG_PREFIX = '[BANKING-CRM]';

// Logging utility with unique keys for filtering
const Logger = {
    info: (key, message, data = null) => {
        const timestamp = new Date().toISOString();
        console.log(`${LOG_PREFIX}[INFO][${key}] ${timestamp} - ${message}`, data || '');
    },
    warn: (key, message, data = null) => {
        const timestamp = new Date().toISOString();
        console.warn(`${LOG_PREFIX}[WARN][${key}] ${timestamp} - ${message}`, data || '');
    },
    error: (key, message, error = null) => {
        const timestamp = new Date().toISOString();
        console.error(`${LOG_PREFIX}[ERROR][${key}] ${timestamp} - ${message}`, error || '');
    },
    debug: (key, message, data = null) => {
        const timestamp = new Date().toISOString();
        console.log(`${LOG_PREFIX}[DEBUG][${key}] ${timestamp} - ${message}`, data || '');
    },
    crm: (key, action, data = null) => {
        const timestamp = new Date().toISOString();
        console.log(`${LOG_PREFIX}[CRM][${key}] ${timestamp} - ${action}`, data || '');
    }
};

// Global variables for CRM application state
let selectedCustomer = null;

// Sample customer data for demonstration
// In production, this would come from a database
const customers = {
    '1': {
        id: '1',
        firstName: 'John',
        lastName: 'Smith',
        phone: '(555) 123-4567',
        email: 'john.smith@email.com',
        address: '123 Main St, Anytown, ST 12345',
        dob: '1985-06-15',
        memberSince: '2020-03-10',
        notes: 'Preferred customer, has premium account package.'
    },
    '2': {
        id: '2',
        firstName: 'Sarah',
        lastName: 'Johnson',
        phone: '(555) 987-6543',
        email: 'sarah.j@email.com',
        address: '456 Oak Ave, Another City, ST 67890',
        dob: '1992-11-23',
        memberSince: '2019-08-22',
        notes: 'Recent graduate, looking for first-time home buyer loan.'
    },
    '3': {
        id: '3',
        firstName: 'Michael',
        lastName: 'Brown',
        phone: '(555) 456-7890',
        email: 'm.brown@email.com',
        address: '789 Pine Rd, Third Town, ST 54321',
        dob: '1978-02-08',
        memberSince: '2021-01-15',
        notes: 'Business owner, interested in commercial banking services.'
    }
};

/* ================================
   CRM FUNCTIONS
   ================================ */

/**
 * Switch between different tabs in the CRM interface
 * @param {Event} event - Click event from tab element
 * @param {string} tabName - Name of the tab to activate
 */
function switchTab(event, tabName) {
    Logger.crm('UI-TAB', `Switching to tab: ${tabName}`);
    
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

/**
 * Search customers based on input text
 * Filters visible customer cards in real-time
 */
function searchCustomers() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    Logger.crm('CUSTOMER-SEARCH', `Searching for: ${searchTerm}`);
    
    const customerCards = document.querySelectorAll('.customer-card');
    let visibleCount = 0;
    
    // Filter customer cards based on search term
    customerCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    Logger.crm('CUSTOMER-SEARCH', `Found ${visibleCount} matching customers`);
}

/**
 * Select a customer and populate their details
 * @param {string} customerId - ID of the customer to select
 */
function selectCustomer(customerId) {
    Logger.crm('CUSTOMER-SELECT', `Selecting customer: ${customerId}`);
    
    // Remove selection from all cards
    document.querySelectorAll('.customer-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    event.target.closest('.customer-card').classList.add('selected');
    
    selectedCustomer = customers[customerId];
    if (selectedCustomer) {
        populateCustomerDetails(selectedCustomer);
        Logger.crm('CUSTOMER-SELECT', `Customer selected: ${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
    }
}

/**
 * Populate customer details form with selected customer data
 * @param {Object} customer - Customer object containing all details
 */
function populateCustomerDetails(customer) {
    document.getElementById('first-name').value = customer.firstName;
    document.getElementById('last-name').value = customer.lastName;
    document.getElementById('phone').value = customer.phone;
    document.getElementById('email').value = customer.email;
    document.getElementById('address').value = customer.address;
    document.getElementById('dob').value = customer.dob;
    document.getElementById('member-since').value = customer.memberSince;
    document.getElementById('notes').value = customer.notes;
}

/**
 * Save customer notes to the selected customer record
 */
function saveCustomerNotes() {
    if (selectedCustomer) {
        const notes = document.getElementById('notes').value;
        selectedCustomer.notes = notes;
        alert('Customer notes saved successfully!');
    } else {
        alert('Please select a customer first');
    }
}

/* ================================
   QUICK ACTIONS
   ================================ */

/**
 * Utility function to show success messages
 * @param {string} message - Message to display
 */
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:15px;border-radius:5px;z-index:1000;';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => document.body.removeChild(successDiv), 3000);
}

/**
 * Create a new case for the selected customer
 */
function createCase() {
    if (selectedCustomer) {
        Logger.crm('QUICK-ACTION', `Case created for customer: ${selectedCustomer.id}`);
        alert(`Creating a new case for ${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
    } else {
        Logger.warn('QUICK-ACTION', 'Create case attempted without customer selection');
        alert('Please select a customer first');
    }
}

/**
 * Schedule a callback for the selected customer
 */
function scheduleCallback() {
    if (selectedCustomer) {
        Logger.crm('QUICK-ACTION', `Callback scheduled for customer: ${selectedCustomer.id}`);
        showSuccessMessage(`✅ Callback scheduled for ${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
    } else {
        Logger.warn('QUICK-ACTION', 'Schedule callback attempted without customer selection');
        alert('Please select a customer first');
    }
}

/**
 * Send an email to the selected customer
 */
function sendEmail() {
    if (selectedCustomer) {
        Logger.crm('QUICK-ACTION', `Email sent to customer: ${selectedCustomer.id}`);
        alert(`Sending email to ${selectedCustomer.email}`);
    } else {
        Logger.warn('QUICK-ACTION', 'Send email attempted without customer selection');
        alert('Please select a customer first');
    }
}

/* ================================
   APPLICATION INITIALIZATION
   ================================ */

/**
 * Initialize the CRM application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    Logger.info('APP-INIT', 'Banking CRM application initialized');
    
    // Set up search input event listener for real-time search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', searchCustomers);
    }
});

/* ================================
   GLOBAL EXPORTS
   ================================ */

// Export functions to global scope for HTML onclick handlers
window.switchTab = switchTab;
window.searchCustomers = searchCustomers;
window.selectCustomer = selectCustomer;
window.saveCustomerNotes = saveCustomerNotes;
window.createCase = createCase;
window.scheduleCallback = scheduleCallback;
window.sendEmail = sendEmail;

// Initialize logging
document.addEventListener('DOMContentLoaded', () => {
    Logger.info('Banking CRM Application loaded', 'APP-INIT');
    Logger.info('DOM Content loaded, application ready', 'DOM-READY');
    
    // Log browser and environment info
    Logger.debug('Environment info', 'ENV-INFO', {
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString()
    });
    
    // Set up global error handling
    window.addEventListener('error', (event) => {
        Logger.error('Global error caught', 'ERROR-GLOBAL', {
            message: event.message,
            filename: event.filename,
            line: event.lineno,
            column: event.colno,
            error: event.error
        });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        Logger.error('Unhandled promise rejection', 'ERROR-PROMISE', {
            reason: event.reason,
            promise: event.promise
        });
    });
});
