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

First, let's create our project directory and navigate into it:

```bash
mkdir banking-crm
cd banking-crm
```

### Step 2: Initialize Node.js Project

Initialize a new Node.js project:

```bash
npm init -y
```

### Step 3: Install Dependencies



### Step 4: Update package.json

Replace the contents of your `package.json` with the exact configuration from the source code:

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
npm list
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

Create `banking-crm.html` with the complete structure from the source code:

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
            <div class="left-panel">
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

.left-panel:not(.active)::before {
    content: "Please login to Webex Contact Center to access CRM features";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-weight: 500;
    color: var(--gray-600);
    text-align: center;
    z-index: 10;
    width: 80%;
    transition: opacity 0.3s ease;
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

### ✅ Checkpoint 2: Test Static UI

At this point, you can test the static user interface:

```bash
npm run dev
```

This should:
1. Open your browser automatically
2. Display the Banking CRM interface
3. Show the "Please login to Webex Contact Center" message overlay on the left panel
4. Display the Webex login form on the right panel

**Expected behavior:**
- Professional banking-themed UI with blue gradient header
- Disabled left panel with overlay message
- Right panel showing Webex Contact Center login section
- Responsive design that works on different screen sizes

**File structure should now be:**
```
banking-crm-webex/
├── package.json
├── package-lock.json
├── banking-crm.html
├── banking-crm.css
├── node_modules/
└── .parcel-cache/ (created automatically)
```

---



### Step 8: Add Global Variables and Customer Data

Add the global variables and customer data structure:

```javascript


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
```

### Step 9: Add DOM Element References

Add the DOM element references for Webex Contact Center integration:

```javascript

```

### Step 10: Implement Webex SDK Initialization


---


```

### Step 12: Implement Agent Station Login

Add the agent login functionality:

```javascript
// Login Agent
function loginAgent() {
    Logger.info('Agent login process started', 'LOGIN-PROCESS');
    
    const teamId = teamsDropdown.value;
    const selectedLoginOption = loginOption.value;

    Logger.debug('Login parameters', 'LOGIN-PARAMS', {
        teamId: teamId,
        loginOption: selectedLoginOption
    });

    if (!teamId) {
        Logger.warn('Login failed: No team selected', 'LOGIN-VALIDATION');
        alert('Please select a team');
        return;
    }

    if (!selectedLoginOption) {
        Logger.warn('Login failed: No login option selected', 'LOGIN-VALIDATION');
        alert('Please select a login option');
        return;
    }

    // Show loading during login process
    loadingSection.style.display = 'block';
    loadingSection.classList.remove('hidden');
    stationLoginSection.style.display = 'none';
    
    Logger.info('UI updated: Showing loading screen for login process', 'UI-UPDATE');
    
    // Update loading message for login
    loadingSection.querySelector('p').textContent = 'Logging into Contact Center...';

    webex.cc
        .stationLogin({
            teamId: teamId,
            loginOption: selectedLoginOption,
            dialNumber: dialNumber.value,
        })
        .then(() => {
            // Step 3: Hide loading, show CRM UI (agent state section)
            loadingSection.style.display = 'none';
            setupLoggedInState();
            loginStatus.textContent = 'Successfully logged in to Banking CRM!';
        })
        .catch((error) => {
            loadingSection.style.display = 'none';
            stationLoginSection.style.display = 'block'; // Show login form again on error
            loginStatus.textContent = 'Login failed: ' + error.message;
            console.error('Login failed:', error);
        });
}
```

### Step 13: Implement Logged-in State Setup

Add the function that activates the full CRM UI after successful login:

```javascript
// Setup logged in state - Show the full CRM UI
function setupLoggedInState() {
    Logger.info('Setting up logged in state', 'STATE-SETUP');
    
    // Hide login-related sections
    stationLoginSection.style.display = 'none';
    loadingSection.style.display = 'none';
    
    // Step 3: Show the full CRM UI
    agentStateSection.style.display = 'block';
    agentStateSection.classList.remove('hidden');
    
    // Enable the left panel (CRM features)
    const leftPanel = document.querySelector('.left-panel');
    if (leftPanel) {
        leftPanel.classList.add('active');
        Logger.info('CRM left panel activated', 'UI-PANEL');
    }
    
    // Enable agent state controls
    agentState.disabled = false;
    
    // Show task area (call handling area)
    taskArea.classList.remove('hidden');
    taskArea.style.display = 'block';

    // Hide all call-related controls initially
    document.querySelector('.no-tasks').style.display = 'block';
    incomingCallControls.style.display = 'none';
    activeCallControls.style.display = 'none';
    wrapupDialog.style.display = 'none';
    consultDialog.style.display = 'none';
    transferDialog.style.display = 'none';

    // Set initial agent status
    updateAgentStatus('Idle');

    // Show success message
    console.log('CRM UI fully loaded and ready for use');
    
    // Update the "no tasks" message to be more welcoming
    const noTasksElement = document.querySelector('.no-tasks');
    if (noTasksElement) {
        noTasksElement.textContent = 'Welcome to Banking CRM! You are ready to receive calls 📞';
    }
}
```

### Step 14: Implement Agent Logout

Add the logout functionality:

```javascript
// Logout Agent
function logoutAgent() {
    webex.cc
        .stationLogout({ logoutReason: 'logout' })
        .then(() => {
            stationLoginSection.style.display = 'block';
            agentStateSection.style.display = 'none';
            agentState.disabled = true;
            agentState.selectedIndex = 0;
            updateAgentStatus('Offline');
            userDropdown.classList.remove('show');
            loginStatus.textContent = 'Logged out successfully';
            loginButton.disabled = false;
            teamsDropdown.selectedIndex = 0;
            loginOption.selectedIndex = 0;
            dialNumber.value = '';
        })
        .catch((error) => {
            console.error('Logout failed:', error);
            alert('Failed to logout');
        });
}
```

### Step 15: Implement Agent State Management

Add agent state handling:

```javascript
// Handle agent status changes
function handleAgentStatus(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    if (selectedOption.value === 'AVAILABLE') {
        agentStatus = 'Available';
        auxCodeId = 0;
    } else {
        agentStatus = selectedOption.text;
        auxCodeId = selectedOption.value;
    }
}

// Set Agent State
function setAgentState() {
    const stateOption = agentState.options[agentState.selectedIndex];
    if (!stateOption.value) return;

    handleAgentStatus({ target: agentState });

    const state = agentStatus === 'Available' ? 'Available' : 'Idle';

    webex.cc
        .setAgentState({
            state,
            auxCodeId,
            lastStateChangeReason: agentStatus,
            agentId,
        })
        .then((response) => {
            console.log('Agent status set successfully', response);
            updateAgentStatus(state);
            stateDropdown.classList.remove('show');
        })
        .catch((error) => {
            console.error('Agent status set failed', error);
            alert('Failed to set agent state');
        });
}

// Update agent status
function updateAgentStatus(state) {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const headerStatusDot = document.getElementById('header-status-dot');
    const headerStatusText = document.getElementById('header-status-text');

    // Reset classes
    statusDot.className = 'status-dot';
    headerStatusDot.className = 'status-dot';

    switch (state) {
        case 'Available':
            statusDot.classList.add('status-available');
            headerStatusDot.classList.add('status-available');
            statusText.textContent = 'Available';
            headerStatusText.textContent = 'Available';
            break;
        case 'Idle':
            statusDot.classList.add('status-idle');
            headerStatusDot.classList.add('status-idle');
            statusText.textContent = 'Idle';
            headerStatusText.textContent = 'Idle';
            break;
        case 'OnCall':
            statusDot.classList.add('status-busy');
            headerStatusDot.classList.add('status-busy');
            statusText.textContent = 'Engaged';
            headerStatusText.textContent = 'On Call';
            break;
        default:
            statusDot.classList.add('status-idle');
            headerStatusDot.classList.add('status-idle');
            statusText.textContent = 'Offline';
            headerStatusText.textContent = 'Offline';
    }
}
```

### ✅ Checkpoint 4: Test Agent Authentication Flow

At this point, you should test the complete authentication flow:

```bash
npm run dev
```

**With a valid Webex access token, test:**
1. Enter your access token
2. Click "Login to Webex Contact Center"
3. See the loading spinner
4. Registration should succeed and show login form
5. Select a team and login option
6. Click "Login to CRM"
7. Should see the full CRM interface with activated left panel

**Expected behavior:**
- Smooth transition through all UI states
- Console logs showing each step
- Left panel becomes active after login
- Agent status controls become available
- Professional CRM interface appears

---


```

### Step 17: Implement Task Event Handlers

Add handlers for task state changes:

```javascript
// Handle task assigned
function handleTaskAssigned() {
    incomingCallControls.style.display = 'none';
    incomingCallControls.classList.add('hidden');
    activeCallControls.style.display = 'block';
    activeCallControls.classList.remove('hidden');
    document.querySelector('.no-tasks').style.display = 'none';

    holdButton.disabled = false;

    // TODO
    const loginOpt = webex.cc?.taskManager?.webCallingService?.loginOption;
    const isBrowserLogin = loginOpt === 'BROWSER';

if (isBrowserLogin) {
    muteButton.disabled = false;
}
    endButton.disabled = false;
    consultButton.disabled = false;
    transferButton.disabled = false;

    updateAgentStatus('OnCall');
}

// Handle task media 
function handleTaskMedia(track) {
    Logger.webex('Media track received for active call', 'TASK-MEDIA', {
        trackKind: track?.kind,
        taskId: currentTask?.taskId
    });
    
    document.getElementById('remote-audio').srcObject = new MediaStream([track]);
}

// Handle task end
function handleTaskEnd(task) {
    // Use the passed task parameter if provided, otherwise use global currentTask
    const taskToHandle = task || currentTask;
    
    Logger.info('Task end event triggered', 'TASK-END', {
        taskId: taskToHandle?.taskId,
        wrapUpRequired: taskToHandle?.data?.wrapUpRequired
    });

    activeCallControls.style.display = 'none';
    incomingCallControls.style.display = 'none';
    consultDialog.style.display = 'none';
    transferDialog.style.display = 'none';

    activeCallControls.classList.add('hidden');
    incomingCallControls.classList.add('hidden');
    consultDialog.classList.add('hidden');
    transferDialog.classList.add('hidden');

    holdButton.disabled = true;
    muteButton.disabled = true;
    endButton.disabled = true;
    consultButton.disabled = true;
    transferButton.disabled = true;

    Logger.debug('UI cleanup completed, checking wrapup requirement', 'TASK-END');

    // Always show wrapup dialog and don't clear currentTask here
    // Let the wrapup submission clear currentTask when completed
    Logger.info('Task ended, showing wrapup dialog', 'TASK-END');
    wrapupDialog.style.display = 'block';
    wrapupDialog.classList.remove('hidden');
}
```

### Step 18: Implement Call Control Functions

Add the call control functions for answer, decline, hold, mute, and end:

```javascript
// Call control functions
function answerCall() {
    Logger.info('Answer call button clicked', 'CALL-ANSWER');
    
    if (currentTask) {
        Logger.debug('Current task exists, accepting call', 'CALL-ACCEPT', {
            taskId: currentTask.taskId,
            interactionId: currentTask.data.interactionId
        });
        
        try {
            currentTask.accept(currentTask.data.interactionId);
            handleTaskAssigned();
        } catch (error) {
            Logger.error('Error accepting call', 'CALL-ACCEPT-ERROR', error);
            alert('Error accepting call: ' + error.message);
        }
    } else {
        Logger.error('Cannot answer call: No current task', 'CALL-ANSWER-ERROR');
        // For testing purposes, show that the button is working
        alert('Answer button clicked! (No active call to answer)');
    }
}

function declineCall() {
    Logger.info('Decline call button clicked', 'CALL-DECLINE');
    
    if (currentTask) {
        Logger.debug('Current task exists, declining call', 'CALL-DECLINE', {
            taskId: currentTask.taskId,
            interactionId: currentTask.data.interactionId
        });
        
        currentTask.decline(currentTask.data.interactionId).then(() => {
            incomingCallControls.style.display = 'none';
            incomingCallControls.classList.add('hidden');
            document.querySelector('.no-tasks').style.display = 'block';
            currentTask = null;
            updateAgentStatus('Idle');
            Logger.info('Call declined successfully', 'CALL-DECLINED');
        }).catch((error) => {
            Logger.error('Failed to decline call', 'CALL-DECLINE-ERROR', error);
            alert('Error declining call: ' + error.message);
        });
    } else {
        Logger.error('Cannot decline call: No current task', 'CALL-DECLINE-ERROR');
        // For testing purposes, show that the button is working
        alert('Decline button clicked! (No active call to decline)');
    }
}

function toggleHold() {
    Logger.info('Hold/Resume button clicked', 'CALL-HOLD');
    
    if (currentTask) {
        if (holdButton.textContent.includes('Hold')) {
            Logger.debug('Putting call on hold', 'CALL-HOLD', {
                taskId: currentTask.taskId,
                action: 'hold'
            });
            
            currentTask.hold().then(() => {
                holdButton.innerHTML = '<i class="fas fa-play"></i> Resume';
                Logger.info('Call placed on hold successfully', 'CALL-HOLD');
            }).catch((error) => {
                Logger.error('Failed to put call on hold', 'CALL-HOLD-ERROR', error);
                alert('Error putting call on hold: ' + error.message);
            });
        } else {
            Logger.debug('Resuming call from hold', 'CALL-HOLD', {
                taskId: currentTask.taskId,
                action: 'resume'
            });
            
            currentTask.resume().then(() => {
                holdButton.innerHTML = '<i class="fas fa-pause"></i> Hold';
                Logger.info('Call resumed from hold successfully', 'CALL-HOLD');
            }).catch((error) => {
                Logger.error('Failed to resume call from hold', 'CALL-HOLD-ERROR', error);
                alert('Error resuming call: ' + error.message);
            });
        }
    } else {
        Logger.error('Cannot toggle hold: No current task', 'CALL-HOLD-ERROR');
        // For testing purposes, show that the button is working
        alert('Hold button clicked! (No active call to hold)');
    }
}

function toggleMute() {
    if (currentTask) {
        currentTask.toggleMute();
        if (muteButton.textContent.includes('Mute')) {
            muteButton.innerHTML = '<i class="fas fa-microphone"></i> Unmute';
            muteButton.classList.add('unmuted');
        } else {
            muteButton.innerHTML = '<i class="fas fa-microphone-slash"></i> Mute';
            muteButton.classList.remove('unmuted');
        }
    }
}

function endCall() 
{
    Logger.info('End call button clicked', 'CALL-END');
    
    if (currentTask) {
        Logger.debug('Current task exists, ending call', 'CALL-END', {
            taskId: currentTask.taskId,
            action: 'end'
        });
        
        currentTask.end().then(() => {
    activeCallControls.style.display = 'none';
    incomingCallControls.style.display = 'none';
    consultDialog.style.display = 'none';
    transferDialog.style.display = 'none';

    activeCallControls.classList.add('hidden');
    incomingCallControls.classList.add('hidden');
    consultDialog.classList.add('hidden');
    transferDialog.classList.add('hidden');

    holdButton.disabled = true;
    muteButton.disabled = true;
    endButton.disabled = true;
    consultButton.disabled = true;
    transferButton.disabled = true;

   /* if (!currentTask.data.wrapUpRequired) {
        Logger.info('Call ended without wrapup required', 'CALL-END');
        document.querySelector('.no-tasks').style.display = 'block';
        currentTask = null;
        return;
    }*/

    Logger.info('Call ended, showing wrapup dialog', 'CALL-END');
    wrapupDialog.style.display = 'block';
    wrapupDialog.classList.remove('hidden');
    Logger.info('Call ended successfully', 'CALL-END');
        }).catch((error) => {
            Logger.error('Failed to end call', 'CALL-END-ERROR', error);
            alert('Error ending call: ' + error.message);
        });
    } else {
        Logger.error('Cannot end call: No current task', 'CALL-END-ERROR');
        // For testing purposes, show that the button is working
        alert('End button clicked! (No active call to end)');
    }
}
```

### Step 19: Implement Wrapup Functionality

Add call wrapup handling:

```javascript
function submitWrapup() {
    Logger.info('Wrapup submission started', 'WRAPUP-SUBMIT');
    
    // Debug the current state
    Logger.debug('Checking wrapup submission conditions', 'WRAPUP-SUBMIT', {
        hasCurrentTask: !!currentTask,
        currentTaskId: currentTask?.taskId,
        wrapupDropdownValue: wrapupCodesDropdown.value,
        wrapupDropdownSelectedIndex: wrapupCodesDropdown.selectedIndex,
        totalWrapupOptions: wrapupCodesDropdown.options.length
    });
    
    if (currentTask && wrapupCodesDropdown.value && wrapupCodesDropdown.value !== '') {
        const wrapupReason = wrapupCodesDropdown.options[wrapupCodesDropdown.selectedIndex].text;
        const auxCodeId = wrapupCodesDropdown.options[wrapupCodesDropdown.selectedIndex].value;

        Logger.debug('Submitting wrapup with selected reason', 'WRAPUP-SUBMIT', {
            taskId: currentTask.taskId,
            wrapupReason: wrapupReason,
            auxCodeId: auxCodeId
        });

        currentTask
            .wrapup({
                wrapUpReason: wrapupReason,
                auxCodeId: auxCodeId,
            })
            .then(() => {
                Logger.info('Wrapup completed successfully', 'WRAPUP-SUBMIT');
                wrapupDialog.classList.add('hidden');
                document.querySelector('.no-tasks').style.display = 'block';
                currentTask = null;
                wrapupCodesDropdown.selectedIndex = 0;
                updateAgentStatus('Available');
            })
            .catch((error) => {
                Logger.error('Wrapup failed', 'WRAPUP-SUBMIT-ERROR', error);
                alert('Failed to complete wrapup');
            });
    } else {
        Logger.warn('Wrapup submission failed: No task or wrapup reason selected', 'WRAPUP-VALIDATION', {
            hasCurrentTask: !!currentTask,
            wrapupValue: wrapupCodesDropdown.value,
            wrapupValueType: typeof wrapupCodesDropdown.value,
            selectedIndex: wrapupCodesDropdown.selectedIndex
        });
        alert('Please select a wrapup reason');
    }
}
```

### Step 20: Implement Consult and Transfer Functions

Add consult and transfer capabilities:

```javascript
// Consult functions
function showConsultDialog() {

    if (currentTask) {
        if (consultButton.textContent.includes('End Consult')) {
            consultButton.disabled = true;
            Logger.debug('User clicked end consult', 'END_CONSULT', {
                taskId: currentTask.taskId,
                action: 'Endconsult'
            });
            
    currentTask
        .endConsult({
               isConsult: true,
               destinationType: 'dialNumber',
        })
        .then(() => {
            console.log('End Consult is success');
            hideConsultDialog();
           // consultButton.innerHTML = '<i class="fas fa-play"></i> resume';
           // consultButton.disabled = true;
           holdButton.innerHTML = '<i class="fas fa-play"></i> Resume';
        })
        .catch((error) => {
            console.error('End Consult failed:', error);
            alert('Failed to End consult');
        });
    }}
        


    consultDialog.style.display = 'block';
    consultDialog.classList.remove('hidden');
}

function hideConsultDialog() {
    consultDialog.style.display = 'none';
    consultDialog.classList.add('hidden');
}

function initiateConsult() {
    const destination = document.getElementById('consult-destination').value;
    if (!destination) {
        alert('Please enter a destination');
        return;
    }

    currentTask
        .consult({
            to: destination,
            destinationType: 'dialNumber',
        })
        .then(() => {
            console.log('Consult initiated successfully');
            hideConsultDialog();
            consultButton.innerHTML = '<i class="fas fa-play"></i> End Consult';
           // consultButton.disabled = true;
        })
        .catch((error) => {
            console.error('Consult failed:', error);
            alert('Failed to initiate consult');
        });
}

// Transfer functions
function showTransferDialog() {
    transferDialog.style.display = 'block';
    transferDialog.classList.remove('hidden');
}

function hideTransferDialog() {
    transferDialog.style.display = 'none';
    transferDialog.classList.add('hidden');
}

function initiateTransfer() {
    const destination = document.getElementById('transfer-destination').value;
    if (!destination) {
        alert('Please enter a destination');
        return;
    }

    currentTask
        .transfer({
            to: destination,
            destinationType: 'dialNumber',
        })
        .then(() => {
            Logger.info('Transfer initiated successfully', 'CALL-TRANSFER');
            hideTransferDialog();
            handleTaskEnd();
        })
        .catch((error) => {
            Logger.error('Transfer failed', 'CALL-TRANSFER-ERROR', error);
            alert('Failed to initiate transfer');
        });
}
```

### ✅ Checkpoint 5: Test Call Handling Logic

Test the call handling functionality:

```bash
npm run dev
```

**Test these features:**
1. **Call control buttons**: Click answer/decline buttons (should show alerts without real calls)
2. **Console logging**: Check for detailed call handling logs
3. **UI transitions**: Verify smooth state changes between call states
4. **Error handling**: Test with invalid inputs

---

## 🏦 Part 6: CRM Functionality Implementation

### Step 21: Implement CRM Tab Switching

Add the CRM tab functionality:

```javascript
// CRM Functions
function switchTab(event, tabName) {
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}
```

### Step 22: Implement Customer Search and Selection

Add customer search and selection functionality:

```javascript
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
```

### Step 23: Implement Quick Actions

Add the CRM quick action functions:

```javascript
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
```

### Step 24: Implement Event Listeners

Add all the event listeners for user interactions:

```javascript
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
```

### Step 25: Expose Functions to Global Scope

Add function exposure and application initialization:

```javascript
// Expose functions to global scope
window.initializeSDK = initializeSDK;
window.loginAgent = loginAgent;
window.logoutAgent = logoutAgent;
window.setAgentState = setAgentState;
window.answerCall = answerCall;
window.declineCall = declineCall;
window.toggleHold = toggleHold;
window.toggleMute = toggleMute;
window.endCall = endCall;
window.submitWrapup = submitWrapup;
window.showConsultDialog = showConsultDialog;
window.hideConsultDialog = hideConsultDialog;
window.initiateConsult = initiateConsult;
window.showTransferDialog = showTransferDialog;
window.hideTransferDialog = hideTransferDialog;
window.initiateTransfer = initiateTransfer;
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
```

### ✅ Checkpoint 6: Test Complete CRM Functionality

Test the complete application:

```bash
npm run dev
```

**Test all CRM features:**

1. **Tab Switching**: Click between Search, Details, Accounts, and Transactions tabs
2. **Customer Search**: Type in the search box and click Search
3. **Customer Selection**: Click on customer cards to select them
4. **Customer Details**: Select a customer and switch to Details tab
5. **Notes**: Add notes and click Save Notes
6. **Quick Actions**: Test Create Case, Schedule Callback, Send Email buttons
7. **Console Logging**: Check for comprehensive logging of all actions

**Expected behavior:**
- Smooth tab transitions
- Search filters customer cards correctly
- Customer selection populates details form
- Notes can be saved successfully
- Quick actions show appropriate alerts
- All interactions are logged to console with timestamps

---

## 🚀 Part 7: Production Build and Deployment

### Step 26: Create Production Build

Build the application for production:

```bash
npm run build
```

This will:
- Create a `dist/` folder with optimized files
- Bundle all JavaScript modules
- Optimize CSS and HTML
- Generate production-ready assets

### Step 27: Test Production Build

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

## 🎯 Part 8: Understanding Key Webex SDK Concepts

### Webex SDK Architecture

The application demonstrates these core Webex Contact Center SDK concepts:

**1. SDK Initialization**
```javascript
webex = Webex.init({
    config: generateWebexConfig(),
    credentials: { access_token: accessToken }
});
```

**2. Agent Registration**
```javascript
webex.cc.register(true).then((profile) => {
    // Access to teams, idle codes, wrapup codes
});
```

**3. Station Login**
```javascript
webex.cc.stationLogin({
    teamId: teamId,
    loginOption: selectedLoginOption,
    dialNumber: dialNumber.value
});
```

**4. Task Handling**
```javascript
webex.cc.on('task:incoming', handleIncomingCall);
// Task events: assigned, media, end
```

**5. Call Controls**
- `currentTask.accept()` - Accept incoming call
- `currentTask.decline()` - Decline incoming call
- `currentTask.hold()` / `currentTask.resume()` - Hold/Resume
- `currentTask.toggleMute()` - Mute/Unmute
- `currentTask.end()` - End call

**6. Advanced Features**
- `currentTask.consult()` - Initiate consult call
- `currentTask.transfer()` - Transfer call
- `currentTask.wrapup()` - Complete call wrapup

### Key Integration Points

**1. Customer Auto-Population**
The app automatically selects customers based on caller ID:
```javascript
function autoSelectCustomerByCaller(phoneNumber) {
    // Matches incoming caller ID with customer database
}
```

**2. Real-time Status Updates**
Agent status is synchronized between header and control panel:
```javascript
function updateAgentStatus(state) {
    // Updates multiple UI elements simultaneously
}
```

**3. Comprehensive Logging**
All actions are logged with unique keys for easy filtering:
```javascript
Logger.webex('SDK-INIT', 'message', data);
Logger.crm('CUSTOMER-SELECT', 'message', data);
```

**4. Call Control Logging**
The application implements consistent logging patterns for all call control operations:
```javascript
// Hold/Resume operations with detailed context
Logger.info('Hold/Resume button clicked', 'CALL-HOLD');
Logger.debug('Putting call on hold', 'CALL-HOLD', {
    taskId: currentTask.taskId,
    action: 'hold'
});
Logger.info('Call placed on hold successfully', 'CALL-HOLD');
Logger.error('Failed to put call on hold', 'CALL-HOLD-ERROR', error);

// Answer/Decline operations
Logger.info('Answer call button clicked', 'CALL-ANSWER');
Logger.info('Decline call button clicked', 'CALL-DECLINE');

// Media track handling
Logger.webex('Media track received for active call', 'TASK-MEDIA', {
    trackKind: track?.kind,
    taskId: currentTask?.taskId
});
```

**Key Logging Categories:**
- `CALL-HOLD`: Hold/Resume actions and status
- `CALL-ANSWER`: Call acceptance operations  
- `CALL-DECLINE`: Call decline operations
- `TASK-MEDIA`: Media track handling and audio setup
- `CALL-HOLD-ERROR`: Hold/Resume error handling
- `CALL-ACCEPT-ERROR`: Call acceptance error handling
- `CALL-DECLINE-ERROR`: Call decline error handling

---

## 🔧 Part 9: Troubleshooting and Best Practices

### Common Issues and Solutions

**1. SDK Initialization Fails**
- Verify access token is valid and not expired
- Check network connectivity to Webex services
- Ensure correct Webex environment (production vs sandbox)

**2. Agent Login Issues**
- Confirm agent is assigned to the selected team
- Verify agent has proper permissions
- Check that login option matches agent configuration

**3. Call Handling Problems**
- Ensure microphone permissions are granted
- Check browser compatibility (Chrome recommended)
- Verify media stream setup for audio

**4. UI Not Responding**
- Check browser console for JavaScript errors
- Verify all DOM elements exist before accessing them
- Ensure proper event listener registration

### Best Practices Implemented

**1. Error Handling**
```javascript
try {
    // Webex operations
} catch (error) {
    Logger.error('context', 'message', error);
    // User-friendly error messages
}
```

**2. Defensive Programming**
```javascript
const loginOpt = webex.cc?.taskManager?.webCallingService?.loginOption;
// Using optional chaining to prevent errors
```

**3. Comprehensive Logging**
- All actions logged with timestamps
- Unique keys for easy filtering
- Different log levels (info, warn, error, debug)

**4. UI State Management**
- Clear separation of concerns
- Smooth transitions between states
- Proper cleanup of event listeners

### Performance Considerations

**1. DOM Manipulation**
- Cache DOM references for frequently accessed elements
- Batch DOM updates when possible
- Use CSS classes for state changes instead of inline styles

**2. Memory Management**
- Clean up event listeners when components are destroyed
- Avoid memory leaks from circular references
- Properly dispose of media streams

---

## 📚 Part 10: Extensions and Advanced Features

### Possible Enhancements

**1. Real Customer Database Integration**
- Replace static customer data with API calls
- Implement real-time customer data synchronization
- Add customer data validation and sanitization

**2. Advanced Call Features**
- Call recording controls
- Conference call management
- Screen sharing integration
- Video call support

**3. Reporting and Analytics**
- Call duration tracking
- Agent performance metrics
- Customer interaction history
- Real-time dashboards

**4. Security Enhancements**
- Token refresh mechanism
- Secure storage of sensitive data
- Audit logging for compliance
- Role-based access control

### Integration Possibilities

**1. CRM Systems**
- Salesforce integration
- Microsoft Dynamics integration
- Custom CRM API integration

**2. Communication Channels**
- Email integration
- Chat/messaging support
- Social media integration
- SMS capabilities

**3. Business Applications**
- Calendar integration for callbacks
- Document management systems
- Knowledge base integration
- Ticketing system integration

---

## 🎉 Conclusion

Congratulations! You have successfully built a complete Banking CRM application with Webex Contact Center SDK integration. This application demonstrates:

### What You've Accomplished

✅ **Full-stack Web Application**: Complete HTML, CSS, and JavaScript implementation  
✅ **Webex SDK Integration**: Proper SDK initialization, registration, and authentication  
✅ **Call Handling**: Complete call lifecycle management (incoming, active, wrapup)  
✅ **Agent Management**: Status control, team selection, and login options  
✅ **CRM Functionality**: Customer search, selection, details management, and notes  
✅ **Professional UI**: Responsive design with modern styling and animations  
✅ **Error Handling**: Comprehensive error management and user feedback  
✅ **Logging System**: Detailed logging for debugging and monitoring  
✅ **Production Ready**: Build system and deployment preparation  

### Key Learning Outcomes

- **Webex Contact Center SDK**: Understanding of core concepts and API usage
- **Modern JavaScript**: ES6 modules, async/await, event handling
- **Web Development**: DOM manipulation, CSS Grid/Flexbox, responsive design
- **Contact Center Concepts**: Agent workflows, call routing, task management
- **Software Architecture**: Separation of concerns, error handling, logging

### Next Steps

1. **Deploy to Production**: Use your preferred hosting platform
2. **Connect Real Data**: Integrate with actual customer databases
3. **Add Security**: Implement proper authentication and authorization
4. **Monitor Performance**: Add analytics and performance monitoring
5. **Extend Features**: Build additional CRM and contact center capabilities

This lab provides a solid foundation for building enterprise-grade contact center applications with Webex Contact Center SDK. The patterns and practices demonstrated here can be extended to create more complex and feature-rich applications.

**Happy coding!** 🚀
