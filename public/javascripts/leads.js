

function deleteLead(leadId){
    $.ajax({
        // matches the route we defined for this purpose
        // router.post('/lead/:lead_id/delete-json', landing.delete_lead_json)
        url: '/lead/' + leadId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({leadId}),
        // not sure why this delete req is a post type. i wonder about restful routing here. typically that would accept a method of delete and a different URL. perhaps because the resource is not being served via URL here. 
        type: 'POST',
        success: (res=> {
            console.log("SUCCESS: ", res)
            // remove is from jquery. it is looking for an element on the dom which has the leadId of the leadId we interpolated here. Interestingly, instead of querying the dom directly using document.body or whatever, you just need this little dollar sign
            $("#"+leadId).remove()
        }),
        error: (err=>{
            console.log("ERROR: ", err)
        })
    })
}