$(document).ready(function(){
  $.ajax({
          url:"https://jsonplaceholder.typicode.com/todos", dataType:"json",success:function(result){
          console.log(result);
          $.each(result,function(i,data){
              console.log(data.id);
              $("#table_view").append(`<tr><td>${data.id}</td><td>${data.title}</td><td><div>
              <input type="checkbox" ${(data.completed)? "checked disabled": ""}></div></td></tr>`)
          })
          
            let count=0;
            $('input[type="checkbox"]').on('change',function(){
                    if($(this).prop('checked')==true)
                    {
                        count++;
                        if(count==5)
                        {
                            alert('Congrats!!! 5 Tasks have been Successfully Completed');
                        }
                    }
                    else
                    {
                        count--;
                    }
                });
        }
    })
});