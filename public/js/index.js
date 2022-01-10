$("#add_admin").submit(function(event){
  alert("Data inserted Successfully...");
})

$("#update_admin").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/admin/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})


$("#update_lab").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/lab/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})


if(window.location.pathname == "/admindetails"){
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/admin/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}
