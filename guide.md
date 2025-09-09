# Building a Banking CRM Application

## 🎯 Lab Overview


This comprehensive lab guide will walk you through building a complete Banking CRM application. You'll learn how to create a professional web application to manage customer data and provide a modern CRM experience.


**What You'll Build:**
- A fully functional Banking CRM web application
- Customer management system with search and details
- Professional UI with responsive design


**Technologies Used:**
- HTML5, CSS3, JavaScript (ES6 modules)
- Font Awesome for icons

---

## 📋 Prerequisites

Before starting this lab, ensure you have:

1. **Node.js installed** (version 16 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **A code editor** (VS Code recommended)



4. **Basic knowledge of:**
   - HTML, CSS, and JavaScript
   - Modern web development concepts


---

## 🚀 Part 1: Project Setup and Environment

### Step 1: Create Project Directory

First, let's create our project directory in cmd and navigate into it:

```bash
mkdir banking-crm
cd banking-crm
```

### Step 2: Initialize Node.js Project

Initialize a new Node.js project, This command will create package.json that you will be updating in next step.

```bash
npm init -y
```

Drag and drop your newly created folder to VScode.

### Step 3: Install Dependencies

Install the required development dependencies for the project:

```bash
npm install parcel --save-dev
```

This will install:
- **Parcel**: A fast, zero-configuration web application bundler
- Automatically handles HTML, CSS, and JavaScript bundling

### Step 4: Update package.json

Replace the contents of your `package.json` with the following:

```json
{
    "name": "banking-crm",
  "version": "1.0.0",
    "description": "Banking CRM application",
  "scripts": {
    "start": "parcel banking-crm.html",
    "build": "parcel build banking-crm.html",
    "dev": "parcel banking-crm.html --open"
  },
    "dependencies": {},
    "devDependencies": {},
  "keywords": [
    "banking",
    "crm",
    "crm",
    "customer-management"
  ],
  "author": "Banking CRM Team",
  "license": "MIT",
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions"
  ]
}
```

### ✅ Checkpoint 1: Verify Project Setup

Test that your project is properly set up:

```bash
ls -ltr
```

You should see the dependencies listed without any errors. The project structure should look like:

```
banking-crm/
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 🎨 Part 2: Creating the User Interface

### Step 5: Create the HTML Structure

Create `banking-crm.html` with the following code. NOTE : Go through the comments in green to understand what each component is rendering.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banking CRM</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="stylesheet" href="banking-crm.css" />
</head>
<body>
    <!-- Header -->
    <div class="header">
        <div class="container">
            <div class="header-content">
                <h1><i class="fas fa-university"></i> Banking CRM</h1>

            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container">
        <div class="main-content">
            <!-- Left Panel - Customer Management -->
            <div class="left-panel active">
                <div class="tabs">
                    <div class="tab active" onclick="switchTab(event, 'customer-search')">
                        <i class="fas fa-search"></i> Search
                    </div>
                    <div class="tab" onclick="switchTab(event, 'customer-details')">
                        <i class="fas fa-user"></i> Details
                    </div>
                    <div class="tab" onclick="switchTab(event, 'accounts')">
                        <i class="fas fa-credit-card"></i> Accounts
                    </div>
                    <div class="tab" onclick="switchTab(event, 'transactions')">
                        <i class="fas fa-list"></i> Transactions
                    </div>
                </div>

                <!-- Customer Search Tab -->
                <div class="tab-content active" id="customer-search">
                    <div class="customer-search">
                        <input type="text" class="search-input" id="search-input" placeholder="Search by name, phone, or account number...">
                        <button class="btn btn-primary" onclick="searchCustomers()">
                            <i class="fas fa-search"></i> Search
                        </button>
                    </div>
                    
                    <div id="customer-results">
                        <div class="customer-card" onclick="selectCustomer('1')">
                            <div class="customer-name">John Smith</div>
                            <div class="customer-info">
                                <div><i class="fas fa-phone"></i> (555) 123-4567</div>
                                <div><i class="fas fa-envelope"></i> john.smith@email.com</div>
                                <div><i class="fas fa-credit-card"></i> ****1234</div>
                                <div><i class="fas fa-calendar"></i> Member since 2020</div>
                            </div>
                        </div>

                        <div class="customer-card" onclick="selectCustomer('2')">
                            <div class="customer-name">Sarah Johnson</div>
                            <div class="customer-info">
                                <div><i class="fas fa-phone"></i> (555) 987-6543</div>
                                <div><i class="fas fa-envelope"></i> sarah.j@email.com</div>
                                <div><i class="fas fa-credit-card"></i> ****5678</div>
                                <div><i class="fas fa-calendar"></i> Member since 2019</div>
                            </div>
                        </div>

                        <div class="customer-card" onclick="selectCustomer('3')">
                            <div class="customer-name">Michael Brown</div>
                            <div class="customer-info">
                                <div><i class="fas fa-phone"></i> (555) 456-7890</div>
                                <div><i class="fas fa-envelope"></i> m.brown@email.com</div>
                                <div><i class="fas fa-credit-card"></i> ****9012</div>
                                <div><i class="fas fa-calendar"></i> Member since 2021</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Customer Details Tab -->
                <div class="tab-content" id="customer-details">
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-input" id="first-name" readonly>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Last Name</label>
                            <input type="text" class="form-input" id="last-name" readonly>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-input" id="phone" readonly>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" id="email" readonly>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-input" id="address" readonly>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" class="form-input" id="dob" readonly>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Customer Since</label>
                            <input type="date" class="form-input" id="member-since" readonly>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Notes</label>
                        <textarea class="form-input" id="notes" rows="4" placeholder="Add customer notes..."></textarea>
                    </div>

                    <button class="btn btn-primary" onclick="saveCustomerNotes()">
                        <i class="fas fa-save"></i> Save Notes
                    </button>
                </div>

                <!-- Accounts Tab -->
                <div class="tab-content" id="accounts">
                    <div id="account-list">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--gray-100); border-radius: 8px; margin-bottom: 0.5rem;">
                            <div>
                                <div style="font-weight: 500;">Checking Account</div>
                                <div style="font-size: 14px; color: var(--gray-600);">****1234</div>
                            </div>
                            <div style="color: var(--success); font-weight: 600;">$2,450.00</div>
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--gray-100); border-radius: 8px; margin-bottom: 0.5rem;">
                            <div>
                                <div style="font-weight: 500;">Savings Account</div>
                                <div style="font-size: 14px; color: var(--gray-600);">****5678</div>
                            </div>
                            <div style="color: var(--success); font-weight: 600;">$15,750.00</div>
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--gray-100); border-radius: 8px;">
                            <div>
                                <div style="font-weight: 500;">Credit Card</div>
                                <div style="font-size: 14px; color: var(--gray-600);">****9012</div>
                            </div>
                            <div style="color: var(--danger); font-weight: 600;">-$1,200.00</div>
                        </div>
                    </div>
                </div>

                <!-- Transactions Tab -->
                <div class="tab-content" id="transactions">
                    <div id="transaction-list">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border-bottom: 1px solid var(--gray-200);">
                            <div>
                                <div style="font-weight: 500;">Grocery Store</div>
                                <div style="font-size: 14px; color: var(--gray-600);">Today, 2:30 PM</div>
                            </div>
                            <div style="font-weight: 600; color: var(--danger);">-$85.42</div>
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border-bottom: 1px solid var(--gray-200);">
                            <div>
                                <div style="font-weight: 500;">Salary Deposit</div>
                                <div style="font-size: 14px; color: var(--gray-600);">Yesterday, 9:00 AM</div>
                            </div>
                            <div style="font-weight: 600; color: var(--success);">+$3,200.00</div>
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border-bottom: 1px solid var(--gray-200);">
                            <div>
                                <div style="font-weight: 500;">ATM Withdrawal</div>
                                <div style="font-size: 14px; color: var(--gray-600);">2 days ago, 6:15 PM</div>
                            </div>
                            <div style="font-weight: 600; color: var(--danger);">-$100.00</div>
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem;">
                            <div>
                                <div style="font-weight: 500;">Interest Payment</div>
                                <div style="font-size: 14px; color: var(--gray-600);">1 week ago</div>
                            </div>
                            <div style="font-weight: 600; color: var(--success);">+$12.50</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Panel - Customer Actions -->
           <div class="right-panel">

                <!-- Customer Quick Actions -->
                <div class="section">
                    <div class="section-header">
                        <i class="fas fa-bolt"></i>
                        Quick Actions
                    </div>
                    <div class="section-content">
                        <button class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;" onclick="createCase()">
                            <i class="fas fa-plus"></i> Create Case
                        </button>
                        <button class="btn btn-secondary" style="width: 100%; margin-bottom: 0.5rem;" onclick="scheduleCallback()">
                            <i class="fas fa-calendar"></i> Schedule Callback
                        </button>
                        <button class="btn btn-secondary" style="width: 100%;" onclick="sendEmail()">
                            <i class="fas fa-envelope"></i> Send Email
                        </button>
                    </div>
                </div>

                <!-- Recent Activities -->
                <div class="section">
                    <div class="section-header">
                        <i class="fas fa-clock"></i>
                        Recent Activities
                    </div>
                    <div class="section-content">
                        <div style="font-size: 14px; color: var(--gray-600); margin-bottom: 0.5rem;">
                            <i class="fas fa-phone" style="color: var(--success);"></i>
                            Call completed - 10:30 AM
                        </div>
                        <div style="font-size: 14px; color: var(--gray-600); margin-bottom: 0.5rem;">
                            <i class="fas fa-envelope" style="color: var(--info);"></i>
                            Email sent - 9:45 AM
                        </div>
                        <div style="font-size: 14px; color: var(--gray-600);">
                            <i class="fas fa-edit" style="color: var(--warning);"></i>
                            Case updated - 9:15 AM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 



    <!-- Include the CRM app.js file -->
    <script type="module" src="./crm-app.js"></script>
</body>
</html>
```

### Step 6: Create the CSS Styles

Create `banking-crm.css` with the complete styling from the source code:

```css
:root {
    --primary: #1e3c72;
    --primary-light: #2a5298;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --info: #3b82f6;
    --gray-100: #f7fafc;
    --gray-200: #edf2f7;
    --gray-300: #e2e8f0;
    --gray-600: #718096;
    --gray-800: #2d3748;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f7fa;
    color: #333;
    line-height: 1.6;
}

.header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header h1 {
    font-size: 2rem;
    font-weight: 600;
}

.agent-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.agent-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    cursor: pointer;
}

.status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #6b7280;
    animation: pulse 2s infinite;
}

.status-available { background: var(--success); }
.status-busy { background: var(--danger); }
.status-idle { background: var(--warning); }

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.main-content {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 20px;
    padding: 20px 0;
    min-height: calc(100vh - 80px);
}

.left-panel {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
    opacity: 0.3;
    pointer-events: none;
    transition: all 0.3s ease;
}

.left-panel.active {
    opacity: 1;
    pointer-events: auto;
}

.left-panel.active::before {
    opacity: 0;
    pointer-events: none;
}

.right-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
}

.section-header {
    background: var(--gray-100);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--gray-200);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.section-content {
    padding: 1.5rem;
}

.tabs {
    display: flex;
    background: var(--gray-100);
    border-bottom: 1px solid var(--gray-200);
}

.tab {
    flex: 1;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
}

.tab.active {
    background: white;
    border-bottom-color: var(--primary);
    color: var(--primary);
}

.tab-content {
    display: none;
    padding: 1.5rem;
}

.tab-content.active {
    display: block;
}

.customer-search {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.search-input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
}

.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-light);
}

.btn-secondary {
    background: var(--gray-200);
    color: var(--gray-800);
}

.btn-secondary:hover {
    background: var(--gray-300);
}

.customer-card {
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.customer-card:hover {
    border-color: var(--primary);
    box-shadow: 0 2px 8px rgba(30, 60, 114, 0.1);
}

.customer-card.selected {
    border-color: var(--primary);
    background: rgba(30, 60, 114, 0.05);
}

.customer-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.customer-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    font-size: 14px;
    color: var(--gray-600);
}

.form-group {
    margin-bottom: 1rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

/* Webex Call Center Styles - Updated from original */
.call-center-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
}

.auth-container {
    padding: 1.5rem;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--gray-800);
}

.input-group input, .input-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
}

.auth-button {
    width: 100%;
    padding: 0.75rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
}

.auth-button:hover:not(:disabled) {
    background: var(--primary-light);
}

.auth-button:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
}

.status {
    margin-top: 0.5rem;
    font-size: 14px;
    color: var(--gray-600);
}

.login-grid {
    display: grid;
    gap: 1rem;
}

.hidden {
    display: none !important;
}

.loading-spinner {
    text-align: center;
    padding: 2rem;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--gray-200);
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.agent-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: var(--gray-100);
    border-bottom: 1px solid var(--gray-200);
}

.agent-details {
    display: flex;
    flex-direction: column;
}

.agent-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.agent-designation {
    font-size: 14px;
    color: var(--gray-600);
}

.header-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.state-menu, .user-menu {
    position: relative;
    cursor: pointer;
}

.agent-status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    transition: background 0.3s ease;
}

.agent-status-indicator:hover {
    background: var(--gray-200);
}

.state-dropdown, .user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    min-width: 180px;
    display: none;
    z-index: 1000;
}

.state-dropdown.show, .user-dropdown.show {
    display: block;
}

.user-icon {
    width: 32px;
    height: 32px;
    background: var(--gray-300);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

.task-area {
    padding: 1.5rem;
}

.no-tasks {
    text-align: center;
    color: var(--gray-600);
    font-size: 16px;
}

.call-card {
    background: var(--gray-100);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
}

.incoming-call {
    border-left: 4px solid var(--warning);
    animation: pulse-border 2s infinite;
}

@keyframes pulse-border {
    0%, 100% { border-left-color: var(--warning); }
    50% { border-left-color: var(--danger); }
}

.incoming-call-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.incoming-call-header h3 {
    margin: 0;
}

.call-actions {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
}

.btn-accept {
    background: var(--success);
    color: white;
}

.btn-accept:hover:not(:disabled) {
    background: #059669;
}

.btn-decline {
    background: var(--danger);
    color: white;
}

.btn-decline:hover:not(:disabled) {
    background: #dc2626;
}

.call-controls-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.control-button {
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    background: var(--gray-200);
    color: var(--gray-800);
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.control-button:hover:not(:disabled) {
    background: var(--gray-300);
}

.control-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.control-button.unmuted {
    background: var(--danger);
    color: white;
}

.select-group {
    margin-bottom: 1rem;
}

.select-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.select-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 14px;
}

@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
    }
    
    .header-content {
        flex-direction: column;
        gap: 1rem;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .call-controls-grid {
        grid-template-columns: 1fr;
    }
}
```

### Step 7: Create the JavaScript Application

Create `crm-app.js` with the complete CRM functionality:

```javascript
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
        showSuccessMessage('Customer notes saved successfully!');
        Logger.crm('CUSTOMER-NOTES', 'Notes saved for customer', { customerId: selectedCustomer.id });
    } else {
        alert('Please select a customer first');
        Logger.warn('CUSTOMER-NOTES', 'Save notes attempted without customer selection');
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
        showSuccessMessage(`✅ Case created for ${selectedCustomer.firstName} ${selectedCustomer.lastName}`);
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
        showSuccessMessage(`✅ Email sent to ${selectedCustomer.email}`);
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
    
    // Log browser and environment info
    Logger.debug('ENV-INFO', 'Environment details', {
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString()
    });
    
    // Set up global error handling
    window.addEventListener('error', (event) => {
        Logger.error('ERROR-GLOBAL', 'Global error caught', {
            message: event.message,
            filename: event.filename,
            line: event.lineno,
            column: event.colno,
            error: event.error
        });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        Logger.error('ERROR-PROMISE', 'Unhandled promise rejection', {
            reason: event.reason,
            promise: event.promise
        });
    });
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
```

### ✅ Checkpoint 2: Test CRM Application

At this point, you can test the complete CRM application:

```bash
npm run dev
```

This should:
1. Open your browser automatically
2. Display the Banking CRM interface with full functionality
3. Show customer search and details tabs
4. Enable customer selection and quick actions

**Expected behavior:**
- Professional banking-themed UI with blue gradient header
- Working tab navigation between Search, Details, Accounts, and Transactions
- Customer search functionality with real-time filtering
- Customer selection populates the details form
- Quick action buttons (Create Case, Schedule Callback, Send Email) work
- Console logging shows detailed application activity

**Test the following features:**
1. **Tab Switching**: Click between different tabs in the left panel
2. **Customer Search**: Type in the search box to filter customers
3. **Customer Selection**: Click on customer cards to select them
4. **Details Population**: Switch to Details tab after selecting a customer
5. **Notes Saving**: Add notes and click "Save Notes"
6. **Quick Actions**: Test the three quick action buttons in the right panel
7. **Console Logging**: Open browser dev tools to see detailed logs with timestamps

**File structure should now be:**
```
banking-crm/
├── package.json
├── package-lock.json
├── banking-crm.html
├── banking-crm.css
├── crm-app.js
├── node_modules/
└── .parcel-cache/ (created automatically)
```

---

## 🎯 Part 3: Testing and Understanding the Application

### Application Features Overview

Your Banking CRM application now includes:

**1. Customer Management System**
- Real-time customer search and filtering
- Customer selection and details management
- Editable customer notes with save functionality

**2. Professional User Interface**
- Modern banking-themed design with gradient header
- Responsive tab navigation system
- Interactive customer cards with hover effects
- Success message notifications

**3. Quick Action Tools**
- Create Case functionality for customer issues
- Schedule Callback for follow-up appointments  
- Send Email integration for customer communication

**4. Comprehensive Logging System**
- Detailed console logging with timestamps
- Unique log keys for easy filtering ([BANKING-CRM][INFO][KEY])
- Error handling and debugging capabilities
- Application state tracking

### Understanding the Code Structure

**Customer Data Management:**
```javascript
// Sample customer data structure
const customers = {
    '1': {
        id: '1',
        firstName: 'John',
        lastName: 'Smith',
        phone: '(555) 123-4567',
        email: 'john.smith@email.com',
        // ... additional fields
    }
};
```

**Tab Navigation System:**
```javascript
function switchTab(event, tabName) {
    // Remove active states from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    
    // Activate selected tab
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}
```

**Search Functionality:**
```javascript
function searchCustomers() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filter customer cards based on search term
    customerCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}
```

### ✅ Final Testing Checklist

Test all features systematically:

**1. Tab Navigation**
- [ ] Click "Search" tab - should show customer list
- [ ] Click "Details" tab - should show customer form
- [ ] Click "Accounts" tab - should show account placeholder
- [ ] Click "Transactions" tab - should show transaction placeholder

**2. Customer Search**
- [ ] Type "John" in search box - should filter to John Smith
- [ ] Type "555" in search box - should show customers with matching phone numbers
- [ ] Clear search box - should show all customers

**3. Customer Selection**
- [ ] Click on John Smith card - should highlight the card
- [ ] Switch to Details tab - should populate form with John's information
- [ ] Select different customer - should update form data

**4. Notes Management**
- [ ] Select a customer and go to Details tab
- [ ] Modify the notes field
- [ ] Click "Save Notes" - should show success message
- [ ] Select another customer and return - notes should be saved

**5. Quick Actions**
- [ ] Select a customer
- [ ] Click "Create Case" - should show success message with customer name
- [ ] Click "Schedule Callback" - should show success message
- [ ] Click "Send Email" - should show success message with email address
- [ ] Try quick actions without selecting customer - should show alert

**6. Console Logging**
- [ ] Open browser Developer Tools (F12)
- [ ] Go to Console tab
- [ ] Perform various actions and observe detailed logging
- [ ] Look for log entries starting with [BANKING-CRM]

---

## 🚀 Part 4: Production Build and Deployment

### Step 8: Create Production Build

Build the application for production:

```bash
npm run build
```

This will:
- Create a `dist/` folder with optimized files
- Bundle all JavaScript modules
- Optimize CSS and HTML
- Generate production-ready assets

### Step 9: Test Production Build

You can serve the production build locally:

```bash
# Install a simple HTTP server (if not already installed)
npm install -g serve

# Serve the built application
serve dist
```

### ✅ Final Checkpoint: Production Testing

**Test the production build:**
1. Navigate to the served URL (usually `http://localhost:3000`)
2. Verify all functionality works as expected
3. Check browser console for any errors
4. Test responsive design on different screen sizes

---

## 🎉 Conclusion

Congratulations! You have successfully built a complete Banking CRM application. This application demonstrates:

### What You've Accomplished

✅ **Full-stack Web Application**: Complete HTML, CSS, and JavaScript implementation  
✅ **Customer Management**: Search, selection, details management, and notes  
✅ **Professional UI**: Responsive design with modern styling and animations  
✅ **Interactive Features**: Tab navigation, real-time search, and quick actions  
✅ **Error Handling**: Comprehensive error management and user feedback  
✅ **Logging System**: Detailed logging for debugging and monitoring  
✅ **Production Ready**: Build system and deployment preparation  

### Key Learning Outcomes

- **Modern JavaScript**: ES6 modules, event handling, DOM manipulation
- **Web Development**: CSS Grid/Flexbox, responsive design, user experience
- **Software Architecture**: Separation of concerns, error handling, logging
- **Customer Management**: CRM workflows, data management, user interactions

### Next Steps

1. **Deploy to Production**: Use your preferred hosting platform (Netlify, Vercel, etc.)
2. **Connect Real Data**: Integrate with actual customer databases or APIs
3. **Add Security**: Implement proper authentication and data validation
4. **Extend Features**: Add more CRM capabilities like reporting, analytics, etc.
5. **Mobile Optimization**: Enhance mobile responsiveness and add PWA features

This lab provides a solid foundation for building enterprise-grade customer management applications. The patterns and practices demonstrated here can be extended to create more complex and feature-rich applications.

**Happy coding!** 🚀
