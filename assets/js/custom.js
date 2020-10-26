jQuery(document).ready(function ($) {

    function formatFormFields () {
        var result = {
            productName: $('input[name=name]').val(),
            quantity: $('input[name=quantity').val(),
            price: $('input[name=price').val(),
            submittedDate: getFormatedDate()
        }
        return result;
    }

    function ajaxResquest(data, cb_success) {
		$.ajax({
			url: './ajax-request.php',
			data: data,
			type: "POST",
			dataType: "json",
			cache: false,
			complete: function (response) {
				cb_success(response)
			}
		});
    }


    function getFormatedDate (date_ob = new Date()) {

        const date = ("0" + date_ob.getDate()).slice(-2);

        const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        const year = date_ob.getFullYear();

        const hours = date_ob.getHours();

        const minutes = date_ob.getMinutes();

        const seconds = date_ob.getSeconds();

        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    }

    function saveToJson (newData){
        if (localStorage.getItem("coalitiondata")) {
            var oldDatas = JSON.parse(localStorage.getItem("coalitiondata"))
            oldDatas.push(newData)
            localStorage.setItem('coalitiondata', JSON.stringify(oldDatas, null, 4))
        }else {
            localStorage.setItem('coalitiondata', JSON.stringify([newData], null, 4))
        }
        updateTable();
    }

    function updateTable (){
        var template = '';
        var sumTotal = 0;
        if (localStorage.getItem("coalitiondata")){
            var data = JSON.parse(localStorage.getItem("coalitiondata"))
            $.each(data, function(key, obj){
                sumTotal += obj.quantity *  obj.price
                template += `
                    <tr>
                        <th scope="row">${key}</th>
                        <td>${obj.productName}</td>
                        <td>${obj.quantity}</td>
                        <td>${obj.price}</td>
                        <td>${obj.submittedDate}</td>
                        <td>${obj.quantity *  obj.price}</td>
                        <td><button data-index="${key}" class="btn btn-primary delete-data">Delete</button></td>
                    </tr>
                `;
            })
            template += `
                <tr>
                    <td colspan="6">
                        Total
                    </td>
                    <td>${sumTotal}</<td>
                </tr>
            `;
            $('#data-contents').html(template)
            $('#no-data').addClass('d-none')
            $('#coalition-table').removeClass('d-none')
            $("#save-json").removeClass('d-none')
        }
    }

    function removedata (index){
        if (localStorage.getItem("coalitiondata")){
            var data = JSON.parse(localStorage.getItem("coalitiondata"))
            data.splice(index, 1);
            localStorage.setItem('coalitiondata', JSON.stringify(data, null, 4))
        }
    }

    function wirteJsonfile(data){
        var writeData = data
        var blob = new Blob( [ writeData ], {
            type: 'application/octet-stream'
        });

        url = URL.createObjectURL( blob );
        var link = document.createElement( 'a' );
        link.setAttribute( 'href', url );
        link.setAttribute( 'download', 'data.json' );
        var aj = $(link);
        aj.appendTo('body');
        aj[0].click();
        aj.remove();
    }

    updateTable();
    $('form[name=coaition-form]').submit(function(e){
        e.preventDefault();
        var submitedData = formatFormFields()
        saveToJson(submitedData)        
    })

    $("#save-json").on('click', function(e){
        e.preventDefault();
        if (localStorage.getItem("coalitiondata")) {
            wirteJsonfile(localStorage.getItem("coalitiondata"))
        }
    })

    $("body").on('click', 'td button.delete-data', function(e){
        e.preventDefault()
        const index = parseInt($(this).data('index'))
        removedata(index)
        updateTable()
    })

});