let totalAmount = 0;
const billingForm = document.getElementById('billing-form');
const receiptDiv = document.getElementById('receipt');
const receiptItemsDiv = document.getElementById('receipt-items');
const totalPriceSpan = document.getElementById('total-price');

const prices = {
    Coffee: 90,
    Tea: 70,
    Sandwich: 85,
    Cake: 220,
    Juice: 80,
    Pizza: 140
};

billingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form input values
    const item = document.getElementById('item').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = prices[item];

    // Calculate item total
    const itemTotal = price * quantity;
    totalAmount += itemTotal;

    // Create receipt item
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('receipt-item');
    itemDiv.innerHTML = `${item} x ${quantity} = ₹${itemTotal.toFixed(2)}`;
    receiptItemsDiv.appendChild(itemDiv);

    // Update total
    totalPriceSpan.textContent = totalAmount.toFixed(2);

    // Show receipt section
    receiptDiv.style.display = 'block';

    // Reset form
    billingForm.reset();
});

function printReceipt() {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Receipt</title></head><body>');
    printWindow.document.write('<h2 style="text-align: center;">Cafe Receipt</h2>');
    printWindow.document.write('<div style="text-align: center;">Thank you for your visit!</div>');
    printWindow.document.write('<div><hr></div>');
    printWindow.document.write('<div><h3>Items:</h3></div>');
    printWindow.document.write('<div>' + receiptItemsDiv.innerHTML + '</div>');
    printWindow.document.write('<div><hr></div>');
    printWindow.document.write('<div><h3>Total: ₹' + totalAmount.toFixed(2) + '</h3></div>');
    printWindow.document.write('<div><button onclick="window.print()">Print</button></div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
}