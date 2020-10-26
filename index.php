<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coalition Technologies Test</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <form name='coaition-form' class="row">
            <div class="col-12 mb-3">
                <input type="text" name="name" class="form-control" placeholder="Product name" required>
            </div>
            <div class="col-lg-6 mb-md-3">
                <input type="number" name="quantity" class="form-control" placeholder="Quantity in stock" required>
            </div>
            <div class="col-lg-6  mb-md-3">
                <input type="number" name="price" class="form-control" placeholder="Item price" required>
            </div>
            <input type="hidden" name="sumittedDate">
            <button type="submit" class="btn btn-primary">Add</button>
            
        </form>
        <h4 id="no-data" style="text-align: center; margin-top: 45px;">No data</h4>
        <table class="d-none table" style="margin-top: 45px;" id="coalition-table">
            <thead>
                <tr>
                    <th scope='col'>
                        #
                    </th>
                    <th scope='col'>
                        Product name
                    </th>
                    <th scope='col'>
                        Quantity
                    </th>
                    <th scope='col'>
                        Price
                    </th>
                    <th scope='col'>
                        Datetime submitted
                    </th>
                    <th scope='col'>
                        Total value number
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody id="data-contents">

            </tbody>
        </table>
        <div>
            <a class="btn btn-primary d-none" href="#" id="save-json">Download json</a>
        </div>
    </div>
    
    <footer>
        
    </footer>
    <script src="assets/js/jquery-3.5.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/custom.js"></script>
</body>
</html>