**🔍 Account Browser – Salesforce LWC Search Component**

**📖 Overview**

The Account Browser is a Lightning Web Component (LWC) designed to help users quickly search and view Salesforce Account records through a clean and responsive interface. Built using Apex, LWC, and SLDS, this project demonstrates how to integrate the front-end and back-end layers of Salesforce efficiently while applying key concepts like debouncing, reactive data binding, and secure SOQL querying.

The component provides a dynamic search experience: as the user types, a slight delay (debounce timer) ensures that unnecessary server calls are avoided — fetching results only when the user pauses typing. This creates a more efficient and performance-friendly experience within Salesforce Lightning.

**🧩 Key Features**

Real-Time Search – Users can search Account records instantly by name.

Debouncing Logic – A 400ms delay ensures reduced Apex callouts and better performance.

Dynamic Apex Querying – The component uses a reusable Apex class that fetches results from any object dynamically (in this case, Account).

Reactive Data Binding – The input value and Apex results stay perfectly in sync using LWC’s @wire mechanism.

Secure Data Access – Runs in User Mode to respect Salesforce’s field-level security and sharing rules.

Simple UI Layout – Uses Lightning Card and Input Components for a clean, native Salesforce look.

Scalable Design – Can easily be extended to search other standard or custom objects by modifying the Apex parameter.

**🏗️ Project Structure (Conceptual)**

The project follows standard Salesforce DX folder hierarchy:

Apex Class – Handles server-side SOQL query and returns filtered records.

LWC JavaScript Controller – Manages input handling, debouncing, and data fetching.

LWC HTML Template – Displays input fields and dynamically renders the result list.

CSS File – Adds light spacing and readability enhancements.

**🧠 How It Works**

User Input:
The user types a keyword into the search box (for example, “Edge” to find Edge Communications).

Debounce Mechanism:
The JavaScript logic waits for 400 milliseconds after the user stops typing. If no further keys are pressed, the input value is considered final and the search proceeds.

Apex Call:
The component makes a call to the Apex controller, which dynamically constructs a secure SOQL query using the provided search key.

Result Rendering:
Once data is returned, the component displays each Account’s name and Id inside a styled Lightning Card layout.

Dynamic Updates:
As the user types a new keyword, the list automatically refreshes — all without page reloads or manual actions.

**🖼️ UI Screenshots**

You can replace these placeholders later with your real screenshots to visualize each step of the user experience.

🔸 1. Search Box Interface

<img width="1440" height="284" alt="Screenshot 2025-10-20 at 1 11 12 AM" src="https://github.com/user-attachments/assets/6a27212a-a0fb-4062-a1c9-af4f5c85f756" />



🔸 2. Search Results Display


<img width="1438" height="535" alt="Screenshot 2025-10-20 at 1 12 57 AM" src="https://github.com/user-attachments/assets/511236dd-b5e9-4a13-8519-8bd0defa5f7c" />

<img width="1439" height="321" alt="Screenshot 2025-10-20 at 1 15 10 AM" src="https://github.com/user-attachments/assets/d2669c7c-4f3e-44eb-aeb9-7ae4f0455613" />




**⚙️ Technical Concepts Used**

Lightning Web Components (LWC): For building reusable, reactive UI components in Salesforce.

Apex Controller: Acts as a bridge between LWC and the Salesforce database.

@AuraEnabled (cacheable=true): Optimizes response speed and allows client-side caching.

Database.query() with AccessLevel.USER_MODE: Ensures secure data access respecting sharing rules.

Debouncing: JavaScript technique to delay function execution for smoother performance.

Reactive Variables: Automatically refreshes data whenever tracked properties change.

SLDS (Salesforce Lightning Design System): Provides native UI consistency with the Lightning Experience.


**🚀 How to Deploy (Conceptual Steps)**

Clone or Create the Project in your Salesforce DX workspace.

Authorize an Org using sf org login web.

Deploy Source to the org using sf project deploy start.

Open Lightning App Builder and add the Account Browser component to a Lightning Page.

Activate and Preview — test the live search behavior from your UI.
