let products = [];
let expenses = [];

function addProduct() {
  const name = document.getElementById('productName').value;
  const revenue = parseInt(document.getElementById('productRevenue').value);
  if (name && revenue) {
    products.push({ name, revenue });
    updateProductList();
    updateSummary();
    document.getElementById('productName').value = '';
    document.getElementById('productRevenue').value = '';
  }
}

function addExpense() {
  const type = document.getElementById('expenseType').value;
  const amount = parseInt(document.getElementById('expenseAmount').value);
  if (type && amount) {
    expenses.push({ type, amount });
    updateExpenseList();
    updateSummary();
    document.getElementById('expenseType').value = '';
    document.getElementById('expenseAmount').value = '';
  }
}

function updateProductList() {
  const list = document.getElementById('productList');
  list.innerHTML = '';
  products.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - ₹${p.revenue}`;
    list.appendChild(li);
  });
}

function updateExpenseList() {
  const list = document.getElementById('expenseList');
  list.innerHTML = '';
  expenses.forEach(e => {
    const li = document.createElement('li');
    li.textContent = `${e.type} - ₹${e.amount}`;
    list.appendChild(li);
  });
}

function updateSummary() {
  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const netProfit = totalRevenue - totalExpenses;
  const valuation = netProfit * 5;

  document.getElementById('totalRevenue').textContent = totalRevenue;
  document.getElementById('totalExpenses').textContent = totalExpenses;
  document.getElementById('netProfit').textContent = netProfit;
  document.getElementById('valuation').textContent = valuation;

  // Save data to localStorage for next page
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function redirectToPerformance() {
  window.location.href = 'performance.html';
}
