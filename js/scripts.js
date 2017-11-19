$(document).ready(function () {
$('#myForm').bootstrapValidator({
    feedbackIcons: {
        framework: 'bootstrap',
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
        fields: {
            rowname: {
                selector: '#rowname',
                group: '.col-sm-2', // <===== USE THIS OPTION
                validators: {
                    notEmpty: {
                        message: 'The column name is required and cannot be empty'
                    },

                }
            },
            lastname: {
                selector: '#columnname',
                group: '.col-sm-2', // <===== USE THIS OPTION
                validators: {
                    notEmpty: {
                        message: 'The row name is required and cannot be empty'
                    },
                }
            },
            columncount: {
                selector: '#columncount',
                group: '.col-sm-2', // <===== USE THIS OPTION
                validators: {
                    notEmpty: {
                        message: 'The row count is required and cannot be empty or contain letters'
                    },
                    between: {
                        min: 1,
                        max: 7,
                        message: 'Please enter a value between 1 and 7'
                    }
                }
            },

            rowcount: {
                selector: '#rowcount',
                group: '.col-sm-2', // <===== USE THIS OPTION
                message:"Test",
                validators: {
                    notEmpty: {
                        message: 'The column count is required and cannot be empty or contain letters'
                    },
                    between: {
                        min: 1,
                        max: 7,
                        message: 'Please enter a value between 1 and 7'
                    }
                },
            },

        }
});


$('#createTable').on('click', function(event) {
    if ($('#myForm').data('bootstrapValidator').isValid()) {
       createTable();
      }
  });

});
// $(document).on('change','.qty', function(){
//     $('.qty').val($(this).val());
// });
// $(document).on('change','.add-to-cart .qty', function(){
//     $('.add-to-cart .qty').val($(this).val());
//  });
function createTable(){
            var rows = new Number($("#rowcount").val());
            var cols = new Number($("#columncount").val());
            rName = new String($("#rowname").val());
            cName = new String($("#columnname").val());
            var tr = [];
            mytable = $('<table>'+rName+'/'+cName+' Table</table>').attr({ id: "basicTable" });
            for (var i = 0; i < rows; i++) {
                var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
                var col = $('<td></td>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
                //$(col).append("<h4>Price "+i+" </h4>");
                $(row).append("<b>"+cName+" "+(i+1)+"</b>");
                $(mytable).append("<b>"+rName+" "+(i+1)+":</b>");
                for (var j = 0; j < cols; j++) {
                    $('<td></td>').text(":").appendTo(row);
                    var string = "input";
                    $('<td></td>').append("<input placeholder="+string+">").appendTo(row)
                }
            }
            console.log("TTTTT:"+mytable.html());
            mytable.appendTo("#box");
    
}

function deleteTable(){
    location.reload();
}

// function form_validate(attr_id){
//     var result = true;
//     $('#'+attr_id).validator('validate');
//     $('#'+attr_id+' .form-group').each(function(){
//         if($(this).hasClass('has-error')){
//             result = false;
//             return false;
//         }
//     });
//     return result;
// }