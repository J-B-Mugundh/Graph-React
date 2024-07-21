# 3D Force Graph Visualization

This project visualizes transactions and their details using a 3D force graph. Each transaction is represented as a node, with child nodes representing the details of each transaction.

## Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- A local server to serve the HTML file (e.g., VS Code Live Server extension, or any other local server)

## Setup

1. Clone the repository or download the project files.

    ```sh
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Ensure you have a local server to serve the HTML file. If you don't have one, you can use a simple server extension or tool.

## Running the Project

### Using VS Code Live Server Extension

1. Open VS Code.
2. Open the project folder.
3. Install the "Live Server" extension if you haven't already.
4. Right-click on `index.html` and select "Open with Live Server".

### Using Other Local Servers

If you have another local server tool (e.g., Node.js `http-server`), you can use that as well.

1. Open your terminal or command prompt.
2. Navigate to the project directory.
3. Run your preferred command to start the server, e.g.:

    ```sh
    http-server -p 8000
    ```

## Accessing the Project

1. Open your web browser.
2. Go to `http://localhost:8000`.
3. You should see the 3D force graph visualization of the transactions and their details.

## Project Structure

- `index.html`: The main HTML file that contains the code for rendering the 3D force graph.
- `README.md`: This file.

## Customizing the Data

The transactions data is defined within the `index.html` file. You can modify the `transactions` array to include your own data.

```javascript
const transactions = [
  { id: '1', name: 'Transaction 1', txnId: 'TXN12345', amount: '100.00', currency: 'USD', date: '2024-07-22', status: 'Completed', description: 'Payment from A to B' },
  // Add more transactions here
];
