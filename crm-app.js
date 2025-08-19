// ...existing code...

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
    webex: (key, event, data = null) => {
        const timestamp = new Date().toISOString();
        console.log(`${LOG_PREFIX}[WEBEX][${key}] ${timestamp} - ${event}`, data || '');
    },
    crm: (key, action, data = null) => {
        const timestamp = new Date().toISOString();
        console.log(`${LOG_PREFIX}[CRM][${key}] ${timestamp} - ${action}`, data || '');
    }
};

// ...existing code...

// Global variables for CRM
let selectedCustomer = null;
let customers = {
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

// ...existing code...

// ...existing code...

// ...existing code...

// ...existing code...

// CRM Functions
function switchTab(event, tabName) {
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function searchCustomers() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    Logger.crm('Customer search initiated', 'CUSTOMER-SEARCH', { searchTerm: searchTerm });
    
    const customerCards = document.querySelectorAll('.customer-card');
    let visibleCount = 0;
    
    customerCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    Logger.crm('Customer search completed', 'CUSTOMER-SEARCH', { 
        searchTerm: searchTerm,
        totalCards: customerCards.length,
        visibleCards: visibleCount 
    });
}

function selectCustomer(customerId) {
    Logger.crm('Customer selection started', 'CUSTOMER-SELECT', { customerId: customerId });
    
    // Remove selection from all cards
    document.querySelectorAll('.customer-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    event.target.closest('.customer-card').classList.add('selected');
    
    selectedCustomer = customers[customerId];
    if (selectedCustomer) {
        populateCustomerDetails(selectedCustomer);
    }
}

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

function saveCustomerNotes() {
    if (selectedCustomer) {
        const notes = document.getElementById('notes').value;
        selectedCustomer.notes = notes;
        alert('Customer notes saved successfully!');
    } else {
        alert('Please select a customer first');
    }
}

// Simple success message utility
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:15px;border-radius:5px;z-index:1000;';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => document.body.removeChild(successDiv), 3000);
}

function createCase() {
    if (selectedCustomer) {
        alert(`Creating a new case for ${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
    } else {
        alert('Please select a customer first');
    }
}

function scheduleCallback() {
    if (selectedCustomer) {
        showSuccessMessage(`✅ Callback scheduled for ${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
        Logger.crm('Callback scheduled', 'CALLBACK-SCHEDULE', { customerId: selectedCustomer.id });
    } else {
        alert('Please select a customer first');
    }
}

function sendEmail() {
    if (selectedCustomer) {
        alert(`Sending email to ${selectedCustomer.email}`);
    } else {
        alert('Please select a customer first');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Dropdown handlers
    if (stateMenu) {
        stateMenu.addEventListener('click', function (e) {
            if (!stateDropdown.contains(e.target)) {
                stateDropdown.classList.toggle('show');
                e.stopPropagation();
            }
        });
    }

    if (userMenu) {
        userMenu.addEventListener('click', function (e) {
            userDropdown.classList.toggle('show');
            e.stopPropagation();
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (stateMenu && stateDropdown && !stateMenu.contains(e.target) && !stateDropdown.contains(e.target)) {
            stateDropdown.classList.remove('show');
        }
        if (userMenu && userDropdown && !userMenu.contains(e.target)) {
            userDropdown.classList.remove('show');
        }
    });

    // Agent state change handler
    if (agentState) {
        agentState.addEventListener('change', handleAgentStatus);
    }

    // Close dialogs when clicking outside
    document.addEventListener('click', function (e) {
        if (consultDialog && !consultDialog.contains(e.target) && !e.target.matches('#consult-button')) {
            consultDialog.classList.add('hidden');
        }
        if (transferDialog && !transferDialog.contains(e.target) && !e.target.matches('#transfer-button')) {
            transferDialog.classList.add('hidden');
        }
    });
});

// Expose CRM functions to global scope
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
