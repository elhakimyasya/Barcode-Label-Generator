import jsBarcode from 'jsbarcode';


document.addEventListener('DOMContentLoaded', () => {
    // Function to update the table cell values
    const updateTable = () => {
        document.getElementById('part-number').textContent = document.getElementById('input_number_part').value;
        document.getElementById('specification').textContent = document.getElementById('input_specification').value;
        document.getElementById('po-type').textContent = document.getElementById('input_po_type').value;
        document.getElementById('lot-number').textContent = document.getElementById('input_number_lot').value;
        document.getElementById('quantity').textContent = document.getElementById('input_quantity').value;
        document.getElementById('vendor-pn').textContent = document.getElementById('input_vendor_pn').value;
        document.getElementById('vendor-code').textContent = document.getElementById('input_vendor_code').value;
    };

    const generateBarcode = () => {
        jsBarcode("#barcode", document.getElementById('input_barcode').value || 'BH41-00022AE100-B0E1A11000100100400', {
            fontSize: 24,
            textMargin: 14,
        });
    };

    // Attach event listeners to all input fields
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            updateTable();
            generateBarcode();
        });
    });

    document.getElementById('button_print').addEventListener('click', () => {
        window.print();
    });
});